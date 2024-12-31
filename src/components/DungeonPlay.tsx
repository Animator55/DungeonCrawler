import React from 'react'
import generateDungeonStructure from '../logic/generateDungeonStructure'
import { DungeonRoom, router } from '../vite-env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBox, faDoorClosed, faExpand, faPersonWalkingArrowRight, faShop, faStairs, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { RankColorSelector } from '../logic/rankColorSelector'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import ShopPage from './ShopPage'
import Dice from './Dice'
import ChestPage from './ChestPage'
import { pickPuzzle } from '../logic/pickPuzzle'

type Props = {
    rank: string
    theme: string
    setPage: Function
}

type HotBarType = {
    artifacts: any[];
    coins: number;
    keys: number;
    bombs: number;
}

export default function DungeonPlay({ rank, theme, setPage }: Props) {
    const fullscreen = () => {
        let elem = document.getElementById('main')
        if (!elem) return
        if (elem.requestFullscreen) elem.requestFullscreen()
    }
    const [dungeon, setDungeon] = React.useState<DungeonRoom[][] | undefined>()
    const [room, setCurrentRoom] = React.useState<number>(0)
    const [floor, setFloor] = React.useState(0)
    const [inspect, setInspect] = React.useState<number | undefined>()
    const [refresh, setRefresh] = React.useState(false)
    const [items, setItems] = React.useState<HotBarType>({
        artifacts: [
            { rank: "C", name: "Espada de Llamas Eternas", description: "Una espada que arde con fuego inextinguible.", active: true },
            { rank: "D", name: "Escudo de Resistencia", description: "Un escudo que proporciona una bonificación adicional a la resistencia contra ciertos tipos de daño.", active: false },
        ],
        coins: 0,
        keys: 0,
        bombs: 0,
    })

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
            else setDungeon(generateDungeonStructure(rank, theme))
        }
    }, [])

    React.useEffect(() => {
        if (inspect !== undefined) setInspect(undefined)
        if (!dungeon) return
        let storage = JSON.stringify({ dungeon, room, floor })
        window.localStorage.setItem("Dungeon-Crawler-2", storage)
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

    const killEnemies = () => {
        let stor = window.localStorage.getItem("Dungeon-Crawler-2")
        if (stor !== undefined && stor !== null && stor !== "") {
            let obj: DungeonRoom[][] = JSON.parse(stor).dungeon
            console.log(obj, floor, room)
            let newObj = { ...obj[floor][room], enemys: [] }
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
        if(answ1 !== ""){
            while (answ2 === "" || answ2 === answ1) {
                answ2 = pickPuzzle(rank).answer
            }
            while (answ3 === "" || answ3 === answ1 || answ3 === answ2) {
                answ3 = pickPuzzle(rank).answer
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
        if (!dungeon || dungeon[floor][room].enemys.length === 0) return
        return <section id='event-show' className='fade-event'>
            <h5>Enemy!</h5>
            <div className='fight-list'>
                {dungeon[floor][room].enemys.map((el, i) => {
                    let bool = inspect === i
                    return <div
                        className={bool ? 'fight-show selected' : 'fight-show'}
                        key={Math.random()}
                        onClick={(e)=>{
                            let target = e.target as HTMLDivElement
                            if(target) {
                                target.classList.toggle("view")
                                setTimeout(()=>{
                                    target.classList.toggle("view")
                                }, 2000)
                            }
                        }}
                        style={el.ghost && !bool ? { color: "#444", background: "black" } : {}}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        {el.icon && <FontAwesomeIcon icon={iconSelectorObj[el.icon]} />}
                        <p className='name'>{el.name}</p>
                        <p className='enemy-power'>20</p>
                    </div>
                })}
            </div>
            <Dice confirm={(val: string) => { killEnemies() }} />
        </section>
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
            </button>
            )
        }
        return <>
            <div className='hot-bar'>
                {list}
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

    return <section className='dungeon-play' key={Math.random()}>
        {dungeon ? dungeon[floor][room].room === "Shop" ?
            <ShopPage setCurrentRoom={setCurrentRoom} returnIndex={room - 1} />
            :
            dungeon[floor][room].room === "Chest" || dungeon[floor][room].room === "Reward" ?
                <ChestPage
                    reward={dungeon[floor][room].room === "Reward"}
                    setCurrentRoom={setCurrentRoom} returnIndex={room - 1} pickItem={pickItem} />
                :
                normalRoom
            : null}
        <HotBar />
    </section>
}