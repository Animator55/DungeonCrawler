
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RewardImg from "../assets/images/Reward.png"
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons"

type Props = {
    endDungeon:Function
}

export default function RewardPage({ endDungeon}: Props) {
    return <>
        <button
            className='force-luck'
            onClick={() => { endDungeon() }}
        >
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
            Salir de la dungeon
        </button>
        <img className='back-image' src={RewardImg} />
    </>
}