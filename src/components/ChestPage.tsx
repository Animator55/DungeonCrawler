import React from 'react'
import { generateArtifact } from '../logic/generateArtifact'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import ChestImg from "../assets/images/Chest.png"
import RewardImg from "../assets/images/Reward.png"
import Dice from './Dice'

type Props = {
    setCurrentRoom: Function
    openChest: Function
    pickItem: Function
    returnIndex: number
    reward: boolean
    itemPicked: boolean | undefined
    dropData: any | undefined
}

export default function ChestPage({ reward, setCurrentRoom, returnIndex, dropData, itemPicked, pickItem,openChest }: Props) {
    const [drop, setDrop] = React.useState<any | undefined>(dropData)
    // const [luck, forceLuck] = React.useState<boolean>(false)
    const luck = false


    const generate = (val: string) => {
        let number: number = parseInt(val)
        let result = undefined
        if (number === 1) result = generateArtifact("D")
        else if (number === 20) result = generateArtifact("S")
        else if(number >1 &&number < 9)result = generateArtifact("C")
        else if(number >=9 &&number < 15)result = generateArtifact("B")
        else if(number >=15 &&number < 20)result = generateArtifact("A")

        openChest(result)
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
        <img className='back-image' alt={"shop"} src={reward ? RewardImg : ChestImg} />
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
                <button onClick={() => { pickItem(drop) }}>Pick</button>
            </div>
                :
                !itemPicked && <Dice confirm={(val: string) => { generate(val) }} />
            }
        </div>
    </>
}