import React from 'react'
import { generateArtifact, generatePickUp } from '../logic/generateArtifact'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCaretLeft, faCaretRight, faCheck, faCoins, faRotate, faXmark } from '@fortawesome/free-solid-svg-icons'
import ChestImg from "../assets/images/Chest.png"
import RewardImg from "../assets/images/Reward.png"
import { router } from '../vite-env'
import Dice from './Dice'

type Props = { 
    setCurrentRoom: Function
    pickItem: Function
     returnIndex: number
     reward: boolean
     }

export default function ChestPage({ reward,setCurrentRoom, returnIndex, pickItem }: Props) {
    const [drop, setDrop] = React.useState<any | undefined>(undefined)
    const [luck, forceLuck] = React.useState<boolean>(false)


    const generate = (val: string)=>{
        let number: number = parseInt(val)
        let result= undefined
        if(number === 1)result = generateArtifact("B")
        else if(number === 20)result = generateArtifact("S")
        else result = generateArtifact("A")

        setDrop(result)
    }

    return <>
        <button
            className='force-luck'
            onClick={() => { setCurrentRoom(returnIndex) }}
            style={luck ? { background: "#295b28" } : {}}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
        </button>
        <img alt={"shop"} src={reward ? RewardImg:ChestImg} />
        <div className='shop-content'>
            {drop ? <div className='inspect-div'
                style={{ color: RankColorSelector[drop.rank!] }}>
                <p>Rank {drop.rank}</p>
                <div className='icon'>
                    <FontAwesomeIcon icon={iconSelectorObj[drop.name.split(" ")[0]]} />
                </div>
                <div className='inspect-title'>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <h3>{drop.name}</h3>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <hr></hr>
                <p>{drop.description}</p>
                <button onClick={()=>{pickItem(drop)}}>Pick</button>
            </div>
            :
                <Dice confirm={(val:string)=>{generate(val)}}/>
            }
        </div>
    </>
}