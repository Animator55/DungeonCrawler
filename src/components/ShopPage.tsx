import React from 'react'
import { generateArtifact, generatePickUp } from '../logic/generateArtifact'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCoins, faRotate  } from '@fortawesome/free-solid-svg-icons'
import ShopImg from "../assets/images/Shop.png"
import { router } from '../vite-env'

type Props = {setCurrentRoom: Function, returnIndex: number}

const generateShop = (luck: boolean) => {
    let amount = luck ? 3 : Math.floor(Math.random() * 3) + 1
    let list = []
    while (amount > 0) {
        amount--
        let rank = Math.floor(Math.random()*5)
        const ranks = [
            "D", "C","B", "A", "S"
        ]
        list.push(generateArtifact(ranks[rank]))
    }
    let amountPick = luck ? 3 : Math.floor(Math.random() * 3) + 1
    while (amountPick > 0) {
        amountPick--
        list.push(generatePickUp())
    }
    window.localStorage.setItem("DnD-shop", JSON.stringify(list))

    return list
}

export default function ShopPage({setCurrentRoom, returnIndex }: Props) {    
    const [currentShop, setCurrentShop] = React.useState<any[] | undefined>(undefined)
    const [inspect, setInspect] = React.useState<number | undefined>(undefined)
    const [luck, forceLuck] = React.useState<boolean>(false)
    
    React.useEffect(()=>{
        if(currentShop) return
        let stor = window.localStorage.getItem("DnD-shop")
        if(stor === null || stor === undefined) return 
        let parsed = JSON.parse(stor)

        setCurrentShop(parsed)
    }, [])

    const prices: router = {
        "PickUps": "5",
        "D": "5",
        "C": "7",
        "B": "12",
        "A": "15",
        "S": "20",
    }

    return <>
        <button className='refresh-shop' onClick={()=>{setCurrentShop(generateShop(luck))}}>
            <FontAwesomeIcon icon={faRotate}/>
            Reroll
        </button>
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
            onClick={()=>{setCurrentRoom(returnIndex)}}
            style={luck ? {background: "#295b28"}:{}}
            >
            <FontAwesomeIcon icon={faArrowLeft}/>
            Volver
        </button>
        <img alt={"shop"} src={ShopImg} />
        <div className='shop-content'>
            {currentShop && currentShop.map((el, i) => {
                let bool = inspect === i
                return <div
                    className={bool ? 'enemy-show selected' : 'enemy-show'}
                    key={Math.random()}
                    onClick={() => { setInspect(bool ? undefined : i) }}
                    style={{ color: RankColorSelector[el.rank] }}
                >
                    <div>
                        <FontAwesomeIcon icon={iconSelectorObj[el.name.split(" ")[0]]} />
                        <p>{el.name}</p>
                        <p className='coins-item'>
                            {prices[el.rank]}
                            <FontAwesomeIcon icon={faCoins}/>
                        </p>
                    </div>
                    {bool && <p>{el.description}</p>}
                </div>
            })}
        </div>
    </>
}