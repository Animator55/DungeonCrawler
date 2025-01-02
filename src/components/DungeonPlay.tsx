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

type Props = {
    theme: string
    setPage: Function
}

type HotBarType = {
    artifacts: any[];
    coins: number;
    keys: number;
    bombs: number;
}

let rankArray = ["E", "D", "C", "B", "A", "S"]
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

    const [life, setLife]= React.useState(100)
    const [items, setItems] = React.useState<HotBarType>({
        artifacts: [
            { rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true, durability: 100 },
            { rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true, durability: 100 },
            { rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true, durability: 100 },
            { rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true, durability: 100 },
            { rank: "D", name: "Escudo de Resistencia", description: "Un escudo que proporciona una bonificación adicional a la resistencia contra ciertos tipos de daño.", active: false, durability: 8 },
        ],
        coins: 0,
        keys: 0,
        bombs: 0,
    })
    const calculateArtifactPower = () => {
        let total = 0
        for (let i = 0; i < items.artifacts.length; i++) {
            if (items.artifacts[i].active) total += 9
        }
        return total
    }
    const power = 1 + calculateArtifactPower()

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
            }
            else setDungeon(generateDungeonStructure(theme))
        }
    }, [])

    React.useEffect(() => {
        if (inspect !== undefined) setInspect(undefined)
        if (!dungeon) return
        let storage = JSON.stringify({ dungeon, room, floor })
        window.localStorage.setItem("Dungeon-Crawler-2", storage)

        let event = document.getElementById("event-show")
        if (event) event.classList.add("fade-event")
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

    const changeRoom = (newObj: DungeonRoom) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newFloor = obj[floor].map((el, i) => {
            if (i === room) return newObj
            else return el
        })
        let newDungeon = obj.map((el, i) => {
            if (i === floor) return newFloor
            else return el
        })
        let storage = JSON.stringify({ dungeon: newDungeon, room, floor })
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
        changeRoom(newObj)
        setItems({
            ...items, artifacts: items.artifacts.map(el => {
                if (el.active) return { ...el, durability: el.durability - 1 }
                else return el
            })
        })
    }
    const hitEnemy = (index: number) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], enemys: obj[floor][room].enemys.map((el, i) => {
                if (i !== index) return el
                else {
                    let result = el.currentHealth! - 4 <0 ? 0 : el.currentHealth! - 4
                    return {...el, currentHealth: result}
                }
            })
        }
        changeRoom(newObj)
        setItems({
            ...items, artifacts: items.artifacts.map(el => {
                if (el.active) return { ...el, durability: el.durability - 1 }
                else return el
            })
        })
    }
    const lootChest = () => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], itemPicked: true, items: []
        }
        changeRoom(newObj)
    }
    const openChest = (item: any) => {
        if (!dungeon) return
        let obj: DungeonRoom[][] = dungeon
        let newObj = {
            ...obj[floor][room], items: [item]
        }
        changeRoom(newObj)
    }

    const show = (e?: React.MouseEvent) => {
        let section = document.getElementById("event-show") as HTMLDivElement
        if (!section) return
        let bool = section.style.opacity === "1"
        if (e) e.currentTarget.textContent = !bool ? "Hide" : "Show"
        section.style.opacity = bool ? "0" : "1"
        section.style.pointerEvents = bool ? "none" : "all"
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

        return <section id='event-show' style={{ opacity: 1 }}>
            <h5>Puzzle!</h5>
            <p onClick={() => { setInspect(inspect === 0 ? undefined : 0) }}>{dungeon[floor][room].puzzle.question}</p>
            {answers.map(el => {
                return <button
                    key={Math.random()}
                    onClick={() => {
                        if (el === answ1) show()
                    }}
                >
                    {el}
                </button>
            })}
        </section>
    }
    const Enemies = () => {
        const damageSelector=(val:number)=>{
            return 10
            if(val<7)return 15
            else if(val===1)return 20
            else return 5
        }
        
        if (!dungeon || dungeon[floor][room].enemys.length === 0) return
        return <Fight
            enemies={dungeon[floor][room].enemys}
            player={power}
            killEnemy={killEnemy}
            hitEnemy={hitEnemy}
            setLife={(val:number)=>{setLife(life-damageSelector(val))}}
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

    const HotBar = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            let el = items.artifacts[i]
            list.push(<button
                className={el && el.active ? "active" : ""}
                style={el ? { borderColor: RankColorSelector[el.rank], color: RankColorSelector[el.rank] } : {}}
                onClick={() => {
                    if (!el) return
                    setItems({
                        ...items, artifacts: items.artifacts.map((item, j) => {
                            if (i === j) return { ...item, active: !item.active }
                            else return item
                        })
                    })
                }}>
                {el && <FontAwesomeIcon icon={iconSelectorObj[el.name.split(" ")[0]]} />}
                {el && <div className='durability-bar' style={{ width: el.durability * 10 + "%" }}></div>}
            </button>
            )
        }
        return <>
            <div className='hot-bar'>
                <div className='top-hot-bar'>
                    <div className='life-container'>
                        <div className='life-bar' style={{width: life+"%"}}></div>
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faCoins}/>
                        0
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faBomb}/>
                        0
                    </div>
                    <div className='unit'>
                        <FontAwesomeIcon icon={faKey}/>
                        0
                    </div>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    }

    const normalRoom = dungeon && <>
        <nav className='router'>
            {specialRooms && specialRooms.map(el => {
                return <button
                    key={Math.random()}
                    onClick={() => { setCurrentRoom(el.index) }}
                >
                    <FontAwesomeIcon icon={RouterSelector[el.room]} />
                    {<p>{el.index}</p>}
                </button>
            })}
        </nav>
        <button className='end-dungeon' onClick={endDungeon}>
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
        </button>
        <button className="fullscreen" onClick={() => { fullscreen() }}>
            <FontAwesomeIcon icon={faExpand} />
        </button>
        <h3>{dungeon[floor][room].room}</h3>
        <img alt={dungeon[floor][room].room} src={dungeon[floor][room].image} />
        {(dungeon[floor][room].puzzle !== undefined) &&
            <button className='show-event' onClick={show}>Hide</button>}
        <Puzzle />
        <Enemies />
        <div className='buttons'>
            {dungeon[floor][room].routes.map(button => {
                let icon = checkIfRoomIsSpecial(button.roomToMoveIndex)

                return <button
                    key={Math.random()}
                    onClick={() => {
                        if (button.moveFloor) { setFloor(floor + button.moveFloor); setSpecials(undefined) }
                        setCurrentRoom(button.roomToMoveIndex)
                    }}
                >
                    {icon.value && <FontAwesomeIcon icon={RouterSelector[icon.icon]} />}
                    {button.direction + " (" + button.roomToMoveIndex + ")"}
                    {button.tag && button.tag.length !== 0 && button.tag.map(tag => {
                        return <React.Fragment key={Math.random()}>
                            <FontAwesomeIcon icon={RouterSelector[tag]} />
                        </React.Fragment>
                    })}
                </button>
            })}
        </div>
    </>

    React.useEffect(()=>{
        if(life === 100) return
        let main = document.getElementById("main")
        if(main) {
            main.classList.add("damage")
            setTimeout(()=>{
                if(main)main.classList.remove("damage")
            }, 300)
        }
    },[life])

    return <section className='dungeon-play' key={Math.random()}>
        {dungeon ? dungeon[floor][room].room === "Shop" ?
            <ShopPage items={dungeon[floor][room].items} setCurrentRoom={setCurrentRoom} returnIndex={room - 1} />
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