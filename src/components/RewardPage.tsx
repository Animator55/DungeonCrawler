
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RewardImg from "../assets/images/Reward.png"
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons"

type Props = {
    endDungeon:Function
}

export default function RewardPage({ endDungeon}: Props) {
    return <>
        <div className="reward-text">
            <p>
                Lograste sobrepasar todos los desafios de esta dungeon
            </p>
            <p style={{animationDelay: "1.4s"}}>
                Perseguiste el poder todo tu camino
            </p>
            <p style={{animationDelay: "2.5s"}}>
                Y no perdiste la esperanza.
            </p>
            <p style={{animationDelay: "3.5s"}}>
                Superaste la Dungeon, Jugador.
            </p>
        </div>
        <button
            className='force-luck'
            onClick={() => { endDungeon() }}
        >
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
            Salir
        </button>
        <img className='back-image' src={RewardImg} />
    </>
}