import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { enemyType } from "../vite-env"
import { faCaretUp, faUser } from "@fortawesome/free-solid-svg-icons"
import { iconSelectorObj } from "../logic/iconSelectorObj"
import Dice from "./Dice"
import React from "react"

type Props = {
    enemies: enemyType[]
    player: number
    killEnemy: Function
    setLife: Function
}

export default function Fight({ enemies, player, killEnemy,setLife }: Props) {
    const [enemySelected, setSelectedEnemy] = React.useState(0)
    const [dice, setDice] = React.useState<number | undefined>(undefined)

    const calculateTotal = (enemyPower: number, playerPower: number, diceParameter?:number) => {
        let diceLocal = dice ? (dice / 10) : diceParameter ? diceParameter/10 : 1
        let calc = ((playerPower * diceLocal) / enemyPower)

        let result = calc >= 1.95 ? 1.95 : calc
        return (result / 2)
    }

    const fight = () => {
        if (!dice) return
        let calc=calculateTotal(enemies[enemySelected].power, player)
        let rand = Math.random()
        if (rand <= calc) console.log("win",rand, calc)
            else setLife(calc)
        
        if(rand <= calc)setTimeout(()=>{
            killEnemy(enemySelected)
        }, 600)
    }

    React.useEffect(() => {
        if (dice) fight()
    }, [dice])

    const overwriteCalc = (diceLocal: number)=>{
        let val = calculateTotal(enemies[enemySelected].power, player, diceLocal)
        let div = document.querySelector<HTMLDivElement>(".fight-state") 
        if(div) {
            div.textContent = `${Math.round(val * 100)}% de Exito`
            div.style.color = diceLocal > 10 ? "green" :diceLocal < 10 ? "red" : ""
        }
    }

    return <section id='event-show'>
        <h5>Enemy!</h5>
        <div className='fight-list'>
            {enemies.map((el, i) => {
                return <div
                    className={enemySelected === i ? 'fight-show view' : 'fight-show'}
                    key={Math.random()}
                    onClick={() => {
                        if (dice) return
                        setSelectedEnemy(i)
                    }}
                    style={el.ghost ? { color: "#444", background: "black" } : {}}
                >
                    <FontAwesomeIcon icon={faUser} />
                    {el.icon && <FontAwesomeIcon icon={iconSelectorObj[el.icon]} />}
                    <p className='name'>{el.name}</p>
                    <p className='enemy-power'>{el.power}</p>
                    {enemySelected === i && <div className="pointing-enemy">
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>}
                </div>
            })}
        </div>
        <div className="fight-state">
            <p>{Math.round(calculateTotal(enemies[enemySelected].power, player) * 100)}% de Exito</p>
        </div>
        <Dice
            overwriteCalc={overwriteCalc}
            confirm={(val: string) => { setDice(parseInt(val)) }}
            disabled={dice !== undefined}
        />
    </section>
}