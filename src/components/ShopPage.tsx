import React from 'react'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCoins, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ShopImg from "../assets/images/Shop.png"
import { router } from '../vite-env'
import PlaySoundMp3 from '../logic/playSound'

type Props = { returnFromRoom: Function, returnIndex: number, currentItems: any[] | undefined, items: any[] | undefined, buy: Function }

export default function ShopPage({ returnFromRoom, returnIndex, items, buy, currentItems }: Props) {
    // const [currentShop, setCurrentShop] = React.useState<any[] | undefined>(items)
    const [inspect, setInspect] = React.useState<number | undefined>(undefined)
    // const [luck, forceLuck] = React.useState<boolean>(false)
    const luck = false

    // React.useEffect(()=>{
    //     if(currentShop) return
    //     let stor = window.localStorage.getItem("DnD-shop")
    //     if(stor === null || stor === undefined) return 
    //     let parsed = JSON.parse(stor)

    //     setCurrentShop(parsed)
    // }, [])

    let discount = 0 
    if(currentItems) for(let i=0;i<currentItems.length; i++) {
        if(currentItems[i].active && currentItems[i].cha !== undefined) discount += currentItems[i].cha
    }

    const prices: router = {
        "PickUps": `${(5 - discount) < 0 ? 0 : (5-discount)}`,
        "E": `${(5 - discount) < 0 ? 0 : (5-discount)}`,
        "D": `${(7 - discount) < 0 ? 0 : (7-discount)}`,
        "C": `${(10 - discount) < 0 ? 0 : (10-discount)}`,
        "B": `${(14 - discount) < 0 ? 0 : (14-discount)}`,
        "A": `${(20 - discount) < 0 ? 0 : (20-discount)}`,
        "S": `${(25 - discount) < 0 ? 0 : (25-discount)}`,
    }

    return <>
        {/* <button 
            className='force-luck' 
            onClick={()=>{forceLuck(!luck)}}
            style={luck ? {background: "#295b28"}:{}}
            >
            <FontAwesomeIcon icon={luck ? faCheck : faXmark}/>
            Suerte
        </button> */}
        <button
            className='force-luck'
            onClick={() => { returnFromRoom({ roomToMoveIndex: returnIndex, direction: "Atras" }, {value: false}) }}
            style={luck ? { background: "#295b28" } : {}}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
        </button>
        <img className='back-image' alt={"shop"} src={ShopImg} />
        <div className='shop-content'>
            {items && items.map((el, i) => {
                let bool = inspect === i
                return <div
                    className={bool ? 'enemy-show selected' : 'enemy-show'}
                    key={Math.random()}
                    onClick={() => {
                        PlaySoundMp3("inspect")
                        setInspect(bool ? undefined : i)
                    }}
                    style={inspect !== undefined ? { color: RankColorSelector[el.rank], animationDuration: "0ms" } :
                        {
                            color: RankColorSelector[el.rank],
                            animationDelay: i * 100 + "ms"
                        }}
                >
                    <div>
                        {iconSelectorObj[el.name.split(" ")[0]]}
                        <p>{el.name}</p>
                        <p className='coins-item' style={discount !==0 ? { color: "red"}: {}}>
                            {prices[el.rank]}
                            <FontAwesomeIcon icon={faCoins} />
                        </p>
                    </div>
                    {bool && <>
                        <p>{el.description}</p>
                        <button onClick={() => { buy(el, prices[el.rank], i) }}>
                            <FontAwesomeIcon icon={faDollarSign} />
                            Buy
                        </button>
                    </>}
                </div>
            })}
        </div>
    </>
}