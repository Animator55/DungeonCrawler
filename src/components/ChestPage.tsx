import React from 'react'
import { generateArtifact } from '../logic/generateArtifact'
import { RankColorSelector } from '../logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSelectorObj } from '../logic/iconSelectorObj'
import { faArrowLeft, faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import ChestImg from "../assets/images/Chest.png"
import Dice from './Dice'
import PlaySoundMp3 from '../logic/playSound'

type Props = {
    floor: number
    returnFromRoom: Function
    openChest: Function
    pickItem: Function
    returnIndex: number
    itemPicked: boolean | undefined
    dropData: any | undefined
}

let rankArray = ["E", "D", "C", "B", "A", "S"]
export default function ChestPage({ floor,returnFromRoom, returnIndex, dropData, itemPicked, pickItem,openChest }: Props) {
    const [drop, setDrop] = React.useState<any | undefined>(dropData)
    // const [luck, forceLuck] = React.useState<boolean>(false)
    const luck = false


    const generate = (val: string) => {
        let number: number = parseInt(val)
        let result = undefined
        if (number === 1) result = generateArtifact(floor === 0? "E" : rankArray[floor])
        else if (number === 20) result = generateArtifact(rankArray[floor === 5 || floor === 4 ? 5:floor+2])
        else if(number >1 &&number < 14)result = generateArtifact(rankArray[floor])
        else if(number >14 &&number < 20)result = generateArtifact(rankArray[floor === 5 ? floor:floor+1])

        openChest(result)
        setDrop(result)
    }

    React.useEffect(()=>{
        if(drop) PlaySoundMp3("inspect")
    })

    return <>
        <button
            className='force-luck'
            onClick={() => { returnFromRoom({ roomToMoveIndex: returnIndex, direction: "Atras" }) }}
            style={luck ? { background: "#295b28" } : {}}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
        </button>
        <img className='back-image' alt={"shop"} src={ ChestImg} />
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
                <button onClick={() => { PlaySoundMp3("routerButton"); pickItem(drop) }}>Pick</button>
            </div>
                :
                !itemPicked && <Dice confirm={(val: string) => { generate(val) }} />
            }
        </div>
    </>
}