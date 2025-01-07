import React from 'react'
import generateDungeonStructure from '../logic/generateDungeonStructure'
import { DungeonRoom, HotBarType } from '../vite-env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons'
import ShopPage from './ShopPage'
import ChestPage from './ChestPage'
import Fight from './Fight'
import { generatePickUpRoom } from '../logic/generateArtifact'
import { calculateXP, calculateXPdrop } from '../logic/calculateXPdrop'
import { Puzzle } from './Puzzle'
import { checkIfRoomIsSpecial } from '../logic/checkSpecialRoom'
import { RouterSelector } from '../logic/roomIconSelector'
import moveRoomAnimation from '../functions/moveRoomAnimation'
import HotBar from './HotBar'
import { defaultItems } from '../default/defaultItems'
import { fullscreen } from '../functions/fullscreen'
import Picked from './Picked'

type Props = {
    theme: string
    setPage: Function
}
let prevRoom = 0
let preventRoomAnimation = false
let levelUpAlert= false
let lastAddedItems: any[] = []
const specialRoomsArray = ["Puerta","Shop","Chest","Chest Especial","Escaleras","Escaleras de Subida"]

export default function DungeonPlay({ theme, setPage }: Props) {
    const [dungeon, setDungeon] = React.useState<DungeonRoom[][] | undefined>()
    const [room, setCurrentRoom] = React.useState<number>(0)
    const [floor, setFloor] = React.useState(0)
    const [inspect, setInspect] = React.useState<number | undefined>()
    const [life, setLife] = React.useState(100)
    const [items, setItems] = React.useState<HotBarType>(defaultItems)
    const [specialRooms, setSpecials] = React.useState<{ index: number; room: string; }[] | undefined>()
    const calculateArtifactPower = () => {
        let total = 0
        for (let i = 0; i < items.artifacts.length; i++) if (items.artifacts[i].active) total += items.artifacts[i].power
        return total
    }

    const power = calculateXP(items.level).level + calculateArtifactPower()

    const endDungeon = () => {
        setDungeon(undefined)
        setInspect(undefined)
        setCurrentRoom(0)
        setFloor(0)
        setPage("generate")
        window.localStorage.setItem("Dungeon-Crawler-2", "")
    }
    const pickItem = (newItem: any) => setItems({ ...items, artifacts: [...items.artifacts, { ...newItem, active: true }] }) 

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
        let newFloor = dungeon[floor].map((el, i) => {
            if (i === currentRoom) return newObj
            else return el
        })
        let newDungeon = dungeon.map((el, i) => {
            if (i === floor) return newFloor
            else return el
        })
        let storage = JSON.stringify({ room: currentRoom, floor, items, life })
        let dungeonStr = JSON.stringify(newDungeon)
        window.localStorage.setItem("Dungeon-Crawler-2", storage)
        window.localStorage.setItem("Dungeon-Crawler-2-Dungeon", dungeonStr)
        setDungeon(newDungeon)
    }
    const killEnemy = (index: number) => {
        if (!dungeon) return
        let newObj = {
            ...dungeon[floor][room], enemys: dungeon[floor][room].enemys.filter((el, i) => {
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

        let forNextLevel = calculateXP(items.level).xpForNextLevel
        if(items.level + XP >= forNextLevel) levelUpAlert = true
        if (newObj.enemys.length === 0) {
            let amountPick = Math.floor(Math.random() * 3) + 3
            // luck ? 3 :

            lastAddedItems = []
            while (amountPick > 0) {
                amountPick--
                let item: { _id?: "heart" | "coins" | "bombs" | "keys" } = generatePickUpRoom()
                lastAddedItems.push(item)
                if (item._id && item._id !== "heart") data = { ...data, [item._id]: data[item._id] + 1 }
            }
        }
        setItems(data)
    }
    const hitEnemy = (index: number) => {
        if (!dungeon) return
        let newObj = {
            ...dungeon[floor][room], enemys: dungeon[floor][room].enemys.map((el, i) => {
                let damageVal = Math.round(4 * (power / el.power))
                if (i !== index) return el
                else {
                    let result = el.currentHealth! - damageVal < 0 ? 0 : el.currentHealth! - damageVal
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
        if (!dungeon || !dungeon[floor][room].items || dungeon[floor][room].items.length === 0) return
        changeRoom({
            ...dungeon[floor][room], itemPicked: true, items: dungeon[floor][room].items?.filter((el, i) => {
                if (index !== i) return el
            })
        }, room)
    }
    const removePuzzle = (currentRoom: number) => {
        if (!dungeon || !dungeon[floor][currentRoom].puzzle) return
        changeRoom({ ...dungeon[floor][currentRoom], puzzle: undefined }, currentRoom)
    }
    const lootChest = () => dungeon && changeRoom({ ...dungeon[floor][room], itemPicked: true, items: [] }, room)
    const openChest = (item: any) => dungeon && changeRoom({ ...dungeon[floor][room], items: [item] }, room)

    let prevRoomDir = undefined
    let routes = dungeon ? dungeon[floor][room].routes : []
    for (let i = 0; i < routes.length; i++)  if (prevRoom === routes[i].roomToMoveIndex) prevRoomDir = routes[i].direction
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
        <img className={'back-image ' + ImgclassResult} alt={dungeon[floor][room].room} src={dungeon[floor][room].image} />
        {(dungeon && dungeon[floor][room].puzzle) &&
            <Puzzle puzzle={dungeon[floor][room].puzzle} floor={floor} room={room} removePuzzle={removePuzzle} setLife={() => { setLife(life - 10) }} />}
        {(dungeon && dungeon[floor][room].enemys.length !== 0) && 
            <Fight enemies={dungeon[floor][room].enemys} player={power} killEnemy={killEnemy} hitEnemy={hitEnemy} setLife={(val: number) => { setLife(life - Math.round(10 * val)) }} />}
        <div className='buttons'>
            {dungeon[floor][room].routes.map(button => {
                let icon = checkIfRoomIsSpecial(button.roomToMoveIndex, specialRooms)

                return <button
                    key={Math.random()}
                    onClick={() => {
                        moveRoomAnimation(button)
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

    ///// EFFECTS

    React.useEffect(() => { if (life <= 0) endDungeon() }, [life])

    React.useEffect(() => {
        if (dungeon !== undefined) return
        let stor = window.localStorage.getItem("Dungeon-Crawler-2")
        let dun = window.localStorage.getItem("Dungeon-Crawler-2-Dungeon")
        if (stor !== undefined && stor !== null && stor !== ""
            && dun !== undefined && dun !== null && dun !== "") {
            let obj = JSON.parse(stor)
            let dunge = JSON.parse(dun)
            setDungeon(dunge)
            setCurrentRoom(obj.room)
            setFloor(obj.floor)
            setItems(obj.items)
            setLife(obj.life)
        }
        else {
            let dung = generateDungeonStructure(theme)
            setDungeon(dung)
            let dungeonStr = JSON.stringify(dung)
            window.localStorage.setItem("Dungeon-Crawler-2-Dungeon", dungeonStr)
        }
    }, [])

    React.useEffect(()=>{
        if(levelUpAlert) levelUpAlert = false
        if(lastAddedItems.length !== 0) lastAddedItems = []
    }, [items])

    React.useEffect(() => {
        if (!dungeon) return
        if (inspect !== undefined) setInspect(undefined)
        let storage = JSON.stringify({ room, floor, items, life })
        window.localStorage.setItem("Dungeon-Crawler-2", storage)
        preventRoomAnimation = true
        lastAddedItems = []
    }, [room])

    React.useEffect(() => {
        if (specialRooms || !dungeon) return
        let result = []
        for (let i = 0; i < dungeon[floor].length; i++) {
            let curr = dungeon[floor][i]
            if (specialRoomsArray.includes(curr.room)) result.push({ index: i, room: curr.room })
        }
        setSpecials(result)
    })

    return <section className='dungeon-play' key={Math.random()}>
        <button className='end-dungeon' onClick={endDungeon}><FontAwesomeIcon icon={faPersonWalkingArrowRight} /></button>
        <button className="fullscreen" onClick={fullscreen}><FontAwesomeIcon icon={faExpand} /></button>
        <h3>{dungeon && dungeon[floor][room].room}</h3>
        {levelUpAlert && <i className='level-up'>Level Up!</i>}
        {lastAddedItems.length !== 0 && <Picked loot={lastAddedItems}/>}
        {dungeon ? dungeon[floor][room].room === "Shop" ?
            <ShopPage buy={buy} items={dungeon[floor][room].items} setCurrentRoom={setCurrentRoom} returnIndex={room - 1} />
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
        <HotBar items={items} setItems={setItems} life={life}/>
    </section>
}