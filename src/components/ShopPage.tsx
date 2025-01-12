import React from 'react'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCoins, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ShopImg from "../assets/images/Shop.png"
import { router } from '../vite-env'
import PlaySoundMp3 from '../logic/playSound'

type Props = { returnFromRoom: Function, returnIndex: number, items: any[] | undefined, buy: Function }

export default function ShopPage({ returnFromRoom, returnIndex, items, buy }: Props) {
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

    const prices: router = {
        "PickUps": "5",
        "D": "5",
        "C": "7",
        "B": "12",
        "A": "15",
        "S": "20",
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
            onClick={() => { returnFromRoom({ roomToMoveIndex: returnIndex, direction: "Atras" }) }}
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
                        <FontAwesomeIcon icon={iconSelectorObj[el.name.split(" ")[0]]} />
                        <p>{el.name}</p>
                        <p className='coins-item'>
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