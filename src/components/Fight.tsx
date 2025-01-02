import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { enemyType } from "../vite-env"
import { faCaretDown, faCaretUp, faUser } from "@fortawesome/free-solid-svg-icons"
import { iconSelectorObj } from "../logic/iconSelectorObj"
import Dice from "./Dice"
import React from "react"

type Props = {
    enemies: enemyType[]
    player: number
    killEnemy: Function
    hitEnemy: Function
    setLife: Function
}

export default function Fight({ enemies, player, killEnemy, hitEnemy, setLife }: Props) {
    const [enemySelected, setSelectedEnemy] = React.useState(0)
    const [dice, setDice] = React.useState<number | undefined>(undefined)

    const calculateTotal = (enemyPower: number, playerPower: number, diceParameter?: number) => {
        let diceLocal = dice ? (dice / 10) : diceParameter ? diceParameter / 10 : 1
        let calc = ((playerPower * diceLocal) / enemyPower)

        let result = calc >= 1.95 ? 1.95 : calc
        return (result / 2)
    }

    const fight = () => {
        if (!dice) return
        let calc = calculateTotal(enemies[enemySelected].power, player)
        let rand = Math.random()
        if (rand <= calc) {
            let list = document.querySelectorAll(".fight-show")
            let enemy = list[enemySelected]
            if(enemy) enemy.classList.add("got-hit")
            setTimeout(() => {
                hitEnemy(enemySelected)
            }, 1000)
        }
        else setLife(calc)
    }

    React.useEffect(() => {
        if (dice) fight()
    }, [dice])

    const overwriteCalc = (diceLocal: number) => {
        let val = calculateTotal(enemies[enemySelected].power, player, diceLocal)
        let div = document.querySelector<HTMLDivElement>(".fight-state")
        if (div) {
            div.textContent = `${Math.round(val * 100)}% de Exito`
            div.style.color = diceLocal > 10 ? "green" : diceLocal < 10 ? "red" : ""
        }
    }

    React.useEffect(() => {
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].currentHealth! === 0) {
                setTimeout(() => {
                    killEnemy(i)
                }, 1000)
                break
            }
        }
    }, [enemies])

    return <section id='event-show'>
        <div className='fight-list'>
            {enemies.map((el, i) => {
                return <div
                    className={el.currentHealth! === 0 ? 'fight-show dying' : enemySelected === i && !dice ? 'fight-show view' : 'fight-show'}
                    key={Math.random()}
                    data-taken="4"
                    onClick={() => {
                        if (dice || el.currentHealth! === 0) return
                        setSelectedEnemy(i)
                    }}
                    style={el.currentHealth! === 0 ? { opacity: 0.5 } : {}}
                >
                    <FontAwesomeIcon icon={faUser} />
                    {el.icon && <FontAwesomeIcon icon={iconSelectorObj[el.icon]} />}
                    <p className='name'>
                        <i>Rank {el.rank}</i>
                        <b>{el.name}</b>
                    </p>
                    <p className='enemy-power'>{el.power}</p>
                    <span className='enemy-health'>
                        <div style={{ width: (el.currentHealth! * 100) / el.health + "%" }}></div>
                    </span>
                    {enemySelected === i && <div className="pointing-enemy">
                        <FontAwesomeIcon icon={faCaretDown} />
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