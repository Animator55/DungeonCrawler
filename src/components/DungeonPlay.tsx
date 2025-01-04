import React from 'react'
import generateDungeonStructure from '../logic/generateDungeonStructure'
import { DungeonRoom, router } from '../vite-env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBomb, faBox, faCoins, faDoorClosed, faExpand, faKey, faPersonWalkingArrowRight, faShop, faStairs, faXmark } from '@fortawesome/free-solid-svg-icons'
import { RankColorSelector } from '../logic/rankColorSelector'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import ShopPage from './ShopPage'
import ChestPage from './ChestPage'
import { pickPuzzle } from '../logic/pickPuzzle'
import Fight from './Fight'
import { generateLifeColor } from '../logic/generateLifeColor'
import { generatePickUpRoom } from '../logic/generateArtifact'
import { calculateXP, calculateXPdrop } from '../logic/calculateXPdrop'

type Props = {
    theme: string
    setPage: Function
}

type HotBarType = {
    artifacts: any[];
    coins: number;
    keys: number;
    bombs: number;
    [key: string]: any
}

let rankArray = ["E", "D", "C", "B", "A", "S"]
let prevRoom = 0
let preventRoomAnimation = false
let lastAddedItems = []

export default function DungeonPlay({ theme, setPage }: Props) {
    const fullscreen = () => {
        let elem = document.getElementById('main')
        if (!elem) return
        if (elem.requestFullscreen) elem.requestFullscreen()
    }
    const [dungeon, setDungeon] = React.useState<DungeonRoom[][] | undefined>()
    const [room, setCurrentRoom] = React.useState<number>(0)
    const [floor, setFloor] = React.useState(0)
    const [inspect, setInspect] = React.useState<number | undefined>()

    const [life, setLife] = React.useState(100)
    const [items, setItems] = React.useState<HotBarType>({
        level: 0,
        artifacts: [
            { power: 5,rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true, durability: 5 },
            { power: 5,rank: "D", name: "Escudo de Resistencia", description: "Un escudo que proporciona una bonificación adicional a la resistencia contra ciertos tipos de daño.", active: false, durability: 8 },
        ],
        coins: 99,
        keys: 0,
        bombs: 0,
    })
    const calculateArtifactPower = () => {
        let total = 0
        for (let i = 0; i < items.artifacts.length; i++) {
            if (items.artifacts[i].active) total += items.artifacts[i].power
        }
        return total
    }
    const power = items.level + calculateArtifactPower()

    const [specialRooms, setSpecials] = React.useState<{ index: number; room: string; }[] | undefined>()


    const endDungeon = () => {
        setDungeon(undefined)
        setInspect(undefined)
        setCurrentRoom(0)
        setFloor(0)
        setPage("generate")
        window.localStorage.setItem("Dungeon-Crawler-2", "")
    }

    React.useEffect(() => {
        if (dungeon === undefined) {
            let stor = window.localStorage.getItem("Dungeon-Crawler-2")
            if (stor !== undefined && stor !== null && stor !== "") {
                let obj = JSON.parse(stor)
                setDungeon(obj.dungeon)
                setCurrentRoom(obj.room)
                setFloor(obj.floor)
                setItems(obj.items)
                setLife(obj.life)
            }
            else setDungeon(generateDungeonStructure(theme))
        }
    }, [])

    React.useEffect(() => {
        if (!dungeon) return
        if (inspect !== undefined) setInspect(undefined)
        let storage = JSON.stringify({ dungeon, room, floor, items, life })
        window.localStorage.setItem("Dungeon-Crawler-2", storage)
        preventRoomAnimation = true

    }, [room])

    const specialRoomsArray = ["Puerta",
        "Shop",
        "Chest",
        "Chest Especial",
        "Escaleras",
        "Escaleras de Subida"]

    React.useEffect(() => {
        if (!specialRooms && dungeon) {
            let result = []
            for (let i = 0; i < dungeon[floor].length; i++) {
                let curr = dungeon[floor][i]
                if (specialRoomsArray.includes(curr.room)) result.push({ index: i, room: curr.room })
            }
            setSpecials(result)
        }
    })

    const pickItem = (newItem: any) => {
        setItems({
            ...items, artifacts: [...items.artifacts, { ...newItem, active: true }]
        })
    }

    const buy = (item: { _id: "bombs" | "keys" | "coins" | "heart", rank: string }, price: string, index: number) => {
        let priceNum = parseInt(price)
        if (items.coins < priceNum || (item.rank !== "PickUps" && items.artifacts.length === 5)) return
        let newItems = { ...items, coins: items.coins - priceNum }
        if (item._id) {
            if (item._id !== "heart") newItems = { ...newItems, [item._id]: newItems[item._id] + 1 }
            else setLife(100)
        }
        else newItems = { ...newItems, artifacts: [...newItems.artifacts, { ...item, active: true }] }
        setItems(newItems)
        removeItemFromShop(index)
    }

    const changeRoom = (newObj: DungeonRoom, currentRoom: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newFloor = obj[floor].map((el, i) => {
            if (i === currentRoom) return newObj
            else return el
        })
        let newDungeon = obj.map((el, i) => {
            if (i === floor) return newFloor
            else return el
        })
        let storage = JSON.stringify({ dungeon: newDungeon, currentRoom, floor, items, life })
        window.localStorage.setItem("Dungeon-Crawler-2", storage)
        setDungeon(newDungeon)
    }
    const killEnemy = (index: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], enemys: obj[floor][room].enemys.filter((el, i) => {
                if (i !== index) return el
            })
        }
        changeRoom(newObj, room)
        let XP = calculateXPdrop(floor, newObj.room)
        let data = {
            ...items,
            level: items.level + XP,
            artifacts: items.artifacts.filter(el => {
                let newDur = el.durability - 1 <= 0 ? -1 : el.durability - 1
                if (newDur !== -1) {
                    if (el.active) return { ...el, durability: el.durability - 1 }
                    else return el
                }
            })
        }
        if (newObj.enemys.length === 0) {
            let amountPick = Math.floor(Math.random() * 3) + 3
            // luck ? 3 :

            while (amountPick > 0) {
                amountPick--
                let item: { _id?: "heart" | "coins" | "bombs" | "keys" } = generatePickUpRoom()
                if (item._id && item._id !== "heart") data = { ...data, [item._id]: data[item._id] + 1 }
            }
        }
        setItems(data)
    }
    const hitEnemy = (index: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], enemys: obj[floor][room].enemys.map((el, i) => {
                if (i !== index) return el
                else {
                    let result = el.currentHealth! - 4 < 0 ? 0 : el.currentHealth! - 4
                    return { ...el, currentHealth: result }
                }
            })
        }
        changeRoom(newObj, room)
        setItems({
            ...items, artifacts: items.artifacts.map(el => {
                if (el.active) return { ...el, durability: el.durability - 1 }
                else return el
            })
        })
    }
    const removeItemFromShop = (index: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        if (!obj[floor][room].items || obj[floor][room].items.length === 0) return
        let newObj = {
            ...obj[floor][room], itemPicked: true, items: obj[floor][room].items?.filter((el, i) => {
                if (index !== i) return el
            })
        }
        changeRoom(newObj, room)
    }
    const removePuzzle = (currentRoom: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        if (!obj[floor][currentRoom].puzzle) return
        let newObj = {
            ...obj[floor][currentRoom], puzzle: undefined
        }
        changeRoom(newObj, currentRoom)
    }
    const lootChest = () => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], itemPicked: true, items: []
        }
        changeRoom(newObj, room)
    }
    const openChest = (item: any) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], items: [item]
        }
        changeRoom(newObj, room)
    }

    const show = (e?: React.MouseEvent) => {
        let section = document.getElementById("event-show") as HTMLDivElement
        if (!section) return
        let bool = section.style.opacity === "1"
        if (e) e.currentTarget.textContent = !bool ? "Hide" : "Show"
        section.style.opacity = bool ? "0" : "1"
        section.style.pointerEvents = bool ? "none" : "all"
        let currentRoom = room
        setTimeout(() => {
            removePuzzle(currentRoom)
        }, 300)
    }

    const Puzzle = () => {
        if (!dungeon || dungeon[floor][room].puzzle === undefined) return
        let answ1 = dungeon[floor][room].puzzle.answer
        let answ2 = ""
        let answ3 = ""
        if (answ1 !== "") {
            while (answ2 === "" || answ2 === answ1) {
                answ2 = pickPuzzle(rankArray[floor]).answer
            }
            while (answ3 === "" || answ3 === answ1 || answ3 === answ2) {
                answ3 = pickPuzzle(rankArray[floor]).answer
            }
        }
        let answers = [answ1, answ2, answ3].sort(() => Math.random() - 0.5)

        return <section id='event-show' className='puzzle-pop' style={{ opacity: 1 }}>
            <p onClick={() => { setInspect(inspect === 0 ? undefined : 0) }}>{dungeon[floor][room].puzzle.question}</p>
            {answers.map(el => {
                return <button
                    key={Math.random()}
                    onClick={() => {
                        if (el === answ1) show()
                        else {
                            let main = document.getElementById("main")
                            if (main) {
                                main.classList.add("damage")
                                setTimeout(() => {
                                    if (main) main.classList.remove("damage")
                                }, 550)
                            }
                            let span = document.querySelector(".life-bar") as HTMLDivElement
                            if (span) {
                                let val = parseFloat(span.style.width.split("%")[0]) - 10
                                span.style.width = (val) + "%"
                                span.style.backgroundColor = generateLifeColor(val)
                            }
                            setTimeout(() => {
                                setLife(life - 10)
                            }, 1000)
                        }
                    }}
                >
                    {el}
                </button>
            })}
        </section>
    }
    const Enemies = () => {
        const damageSelector = (val: number) => {
            return 10
            if (val < 7) return 15
            else if (val === 1) return 20
            else return 5
        }

        if (!dungeon || dungeon[floor][room].enemys.length === 0) return
        return <Fight
            enemies={dungeon[floor][room].enemys}
            player={power}
            killEnemy={killEnemy}
            hitEnemy={hitEnemy}
            setLife={(val: number) => { setLife(life - damageSelector(val)) }}
        />
    }

    const RouterSelector: router = {
        "Puerta": faDoorClosed,
        "Boss": faDoorClosed,
        "SalaChicaFin": faXmark,
        "SalaGrandeFin": faXmark,
        "Shop": faShop,
        "Tienda": faShop,
        "Cofre": faArchive,
        "CofreEspecial": faBox,
        "Chest": faArchive,
        "Chest Especial": faBox,
        "Escaleras": faStairs,
        "EscalerasSubida": faStairs,
        "Escaleras de Subida": faStairs,
    }

    const checkIfRoomIsSpecial = (roomIndex: number) => {
        if (!specialRooms) return { value: false, icon: "" }
        let result = { value: false, icon: "" }
        for (let i = 0; i < specialRooms.length; i++) {
            if (roomIndex === specialRooms[i].index) {
                result = { value: true, icon: specialRooms[i].room }
                break
            }
        }
        return result
    }

    let pressTimer: null | number = null;
    let draggingPhase: boolean = false

    const DragPhase = (index: number) => {
        pressTimer = setTimeout(() => {
            let target = document.getElementById("artifact_" + index) as HTMLButtonElement
            if (!target) return
            draggingPhase = true
            target.classList.add("selected")
            const cancel = (e: TouchEvent) => {
                DragPhaseCancel()
                let button = e.target as HTMLButtonElement
                if (!button) return
                if (!button.classList.contains("slot-action")) target.classList.remove("selected")
                document.removeEventListener("touchstart", cancel)
            }
            document.addEventListener("touchstart", cancel)
        }, 400)
    };
    const DragPhaseCancel = () => {
        if (pressTimer !== null) {
            clearTimeout(pressTimer);
            draggingPhase = false
            pressTimer = null;
        }
    };
    const HotBar = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            let el = items.artifacts[i]
            list.push(<div className='slot' key={Math.random()}>
                <button
                    id={'artifact_' + i}
                    className={el && el.active ? "active" : ""}
                    style={el ? { borderColor: RankColorSelector[el.rank], color: RankColorSelector[el.rank] } : {}}
                    onTouchStart={() => {
                        DragPhase(i)
                    }}
                    onTouchEnd={() => {
                        if (!draggingPhase) {
                            if (!el) return
                            setItems({
                                ...items, artifacts: items.artifacts.map((item, j) => {
                                    if (i === j) return { ...item, active: !item.active }
                                    else return item
                                })
                            })
                        }
                        DragPhaseCancel()
                    }}>
                    {el && <FontAwesomeIcon icon={iconSelectorObj[el.name.split(" ")[0]]} />}
                    {el && <p>{el.power}</p>}
                    {el && <div className='durability-bar' style={{ width: el.durability * 10 + "%" }}></div>}
                </button>
                {el && <span className='artifact-actions'>
                    <li className='slot-action'>Info</li>
                    <li className='slot-action' onClick={() => {
                        setItems({
                            ...items, artifacts: items.artifacts.filter((el, j) => {
                                if (i !== j) return el
                            })
                        })
                    }}>Drop</li>
                </span>}
            </div>
            )
        }
        let xpResult = calculateXP(items.level)
        console.log(xpResult)
        let totalForNext= xpResult.xpForNextLevel - xpResult.xpForCurrentLevel
        let progressXP = totalForNext - xpResult.remainingXP
        return <>
            <div className='hot-bar'>
                <div className='top-hot-bar'>
                    <div className='life-container'>
                        <div className='life-bar' style={{
                            backgroundColor: generateLifeColor(life),
                            width: life + "%"
                        }}></div>
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faCoins} />
                        {items.coins}
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faBomb} />
                        {items.bombs}
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faKey} />
                        {items.keys}
                    </div>
                </div>
                <div className='xp-zone'>
                    <p>{xpResult.level}</p>
                    <div className='xp-container'>
                        <div className='xp-bar' style={{width: (progressXP*100)/totalForNext+"%"}}>
                        </div>
                        <button className="force-luck"   onClick={() => {
                            setItems({ ...items, level: items.level + 1 })
                        }}>Add 1 xp</button>
                    </div>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    }

    let prevRoomDir = undefined
    let routes = dungeon ? dungeon[floor][room].routes : []
    for (let i = 0; i < routes.length; i++) {
        if (prevRoom === routes[i].roomToMoveIndex) prevRoomDir = routes[i].direction
    }
    let ImgclassResult = ""
    if (prevRoomDir === "Izquierda") ImgclassResult = "fade-from-left-image"
    else if (prevRoomDir === "Derecha") ImgclassResult = "fade-from-right-image"
    else if (prevRoomDir === "Adelante") ImgclassResult = "fade-from-front-image"
    else if (prevRoomDir === "Atras") ImgclassResult = "fade-image"

    if (preventRoomAnimation) ImgclassResult = ""
    const normalRoom = dungeon && <>
        {/*<nav className='router'>
            {specialRooms && specialRooms.map(el => {
                return <button
                    key={Math.random()}
                    onClick={() => { setCurrentRoom(el.index) }}
                >
                    <FontAwesomeIcon icon={RouterSelector[el.room]} />
                    {<p>{el.index}</p>}
                </button>
            })}
        </nav>*/}
        <button className='end-dungeon' onClick={endDungeon}>
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
        </button>
        <button className="fullscreen" onClick={() => { fullscreen() }}>
            <FontAwesomeIcon icon={faExpand} />
        </button>
        <h3>{dungeon[floor][room].room}</h3>
        <img className={'back-image ' + ImgclassResult} alt={dungeon[floor][room].room} src={dungeon[floor][room].image} />
        <Puzzle />
        <Enemies />
        <div className='buttons'>
            {dungeon[floor][room].routes.map(button => {
                let icon = checkIfRoomIsSpecial(button.roomToMoveIndex)

                return <button
                    key={Math.random()}
                    onClick={() => {
                        let image = document.querySelector<HTMLImageElement>(".back-image")
                        if (image) {
                            image.classList.remove("fade-from-right-image")
                            image.offsetHeight
                            image.classList.remove("fade-from-left-image")
                            image.offsetHeight
                            image.classList.remove("fade-from-front-image")
                            image.offsetHeight
                            image.classList.remove("fade-image")
                            image.offsetHeight
                            let classResult = "zoom-in-image-room"
                            if (button.direction === "Atras" || button.direction === "Continuar") classResult = "zoom-out-image-room"
                            else if (button.direction === "Derecha") classResult = "zoom-in-right-image-room"
                            else if (button.direction === "Izquierda") classResult = "zoom-in-left-image-room"
                            image.classList.add(classResult)
                            image.offsetHeight
                        }
                        setTimeout(() => {
                            if (button.moveFloor) { setFloor(floor + button.moveFloor); setSpecials(undefined) }
                            prevRoom = room
                            preventRoomAnimation = false
                            setCurrentRoom(button.roomToMoveIndex)
                        }, 300)
                    }}
                >
                    {icon.value && <FontAwesomeIcon icon={RouterSelector[icon.icon]} />}
                    {button.direction}
                    {/* + " (" + button.roomToMoveIndex + ")" */}
                    {/* {button.tag && button.tag.length !== 0 && button.tag.map(tag => {
                        return <React.Fragment key={Math.random()}>
                            <FontAwesomeIcon icon={RouterSelector[tag]} />
                        </React.Fragment>
                    })} */}
                </button>
            })}
        </div>
    </>


    React.useEffect(() => {
        if (life <= 0) endDungeon()
    }, [life])

    return <section className='dungeon-play' key={Math.random()}>
        {dungeon ? dungeon[floor][room].room === "Shop" ?
            <ShopPage
                buy={buy}
                items={dungeon[floor][room].items} setCurrentRoom={setCurrentRoom} returnIndex={room - 1} />
            :
            dungeon[floor][room].room === "Chest" || dungeon[floor][room].room === "Reward" ?
                <ChestPage
                    reward={dungeon[floor][room].room === "Reward"}
                    itemPicked={dungeon[floor][room].itemPicked}
                    setCurrentRoom={setCurrentRoom} returnIndex={room - 1}
                    dropData={dungeon[floor][room].items ? dungeon[floor][room].items[0] : undefined}
                    openChest={openChest}
                    pickItem={(item: any) => {
                        lootChest()
                        pickItem(item)
                    }} />
                :
                normalRoom
            : null}
        <HotBar />
    </section>
}