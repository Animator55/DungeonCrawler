import { faCoins } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    loot: any[]
}

export default function Picked({loot}: Props) {
  return <div className="pick-ups" style={{animationDelay: (loot.length * (300 + 100) + 100)+ "ms"}}>
    {loot.map((el, i)=>{
        return <li key={Math.random()} style={{animationDelay: i * 100 + "ms"}}>
            +{el.amount} <FontAwesomeIcon icon={faCoins}/> {el.name}
        </li>
    })}
  </div>
}