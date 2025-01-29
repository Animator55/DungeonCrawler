import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { enemyType } from "../vite-env"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { iconSelectorObj } from "../logic/iconSelectorObj"
import Dice from "./Dice"
import React from "react"
import { generateLifeColor } from "../logic/generateLifeColor"
import PlaySoundMp3 from "../logic/playSound"
import { FaGoblin } from "../assets/svg/sword-svgrepo-com"

type Props = {
    enemySelected: number
    setSelectedEnemy: Function
    enemies: enemyType[]
    player: number
    killEnemy: Function
    hitEnemy: Function
    setLife: Function
    isBoss: boolean
}
let fightActive = false

export default function Fight({ enemySelected, setSelectedEnemy, enemies, player, killEnemy, hitEnemy, setLife, isBoss }: Props) {
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
        let list = document.querySelectorAll(".fight-show")
        let enemy = list[enemySelected]
        console.log("fight", new Date().getTime())
        if (rand <= calc) {
            if (enemy) {
                enemy.classList.add("got-hit")
                let span = enemy.querySelector(".enemy-health")
                if (span) {
                    let bar = span.firstChild as HTMLDivElement
                    let damageVal = Math.round(4 * (player / enemies[enemySelected].power))
                    bar.style.width = (enemies[enemySelected].currentHealth! - damageVal < 0 ? 0 : ((
                        (enemies[enemySelected].currentHealth! - damageVal)
                        * 100)
                        / enemies[enemySelected].health)) + "%"
                }
                PlaySoundMp3(isBoss ? "boss" : "goblin")
                PlaySoundMp3(Math.random() > 0.5 ? "attack1" : "attack2")
            }
            setTimeout(() => hitEnemy(enemySelected), 1000)
        }
        else {
            if (enemy) enemy.classList.add("do-hit")
            let main = document.getElementById("main")
            PlaySoundMp3(isBoss ? "boss" : "goblin")
            if (main) {
                main.classList.add("damage")
                setTimeout(() => main && main.classList.remove("damage"), 550)
            }
            let span = document.querySelector(".life-bar") as HTMLDivElement
            if (span) {
                let val = parseFloat(span.style.width.split("%")[0]) - Math.round(10 * (enemies[enemySelected].power / player))
                span.style.width = (val < 0 ? 0 : val) + "%"
                span.style.backgroundColor = generateLifeColor(val)
            }
            PlaySoundMp3("attackPlayer")
            setTimeout(() => {
                if (!enemy) return
                setLife(enemies[enemySelected].power / player)
            }, 1000)
        }
    }

    React.useEffect(() => {
        fightActive = true
        if (dice !== undefined) fight()
    }, [dice])
    const overwriteCalc = (diceLocal: number) => {
        let val = calculateTotal(enemies[enemySelected].power, player, diceLocal)
        let div = document.querySelector<HTMLDivElement>(".fight-state")
        if (!div) return
        div.textContent = `${Math.round(val * 100)}% de Exito`
        div.style.color = diceLocal > 10 ? "green" : diceLocal < 10 ? "red" : ""
        div.style.scale = "1.1"
    }

    let actionClassName = ""
    for (let i = 0; i < enemies.length; i++) if (enemies[i].currentHealth! === 0) {
        if (enemies.length === 1) actionClassName = " disabled"
        PlaySoundMp3("goblinDiying")
        setTimeout(() => killEnemy(i), 1000); break
    }
    return <section id='event-show' className={fightActive ? "" : "fade-event"}>
        <div className='fight-list'>
            {enemies.map((el, i) => {
                return <div
                    className={el.currentHealth! === 0 ?
                        'fight-show dying' : enemySelected === i && !dice ? 'fight-show view'
                            : 'fight-show'}
                    key={Math.random()}
                    data-taken={`${Math.round(4 * (player / el.power))}`}
                    onClick={() => (!dice && el.currentHealth! !== 0) && setSelectedEnemy(i)}
                    style={el.currentHealth! === 0 ? { opacity: 0.5 } : {}}
                >
                    <FaGoblin />
                    {/* <FontAwesomeIcon icon={faUser}/> */}
                    {el.icon && iconSelectorObj[el.icon]}
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
            {Math.round(calculateTotal(enemies[enemySelected].power, player) * 100)}% de Exito
        </div>
        <div className="dice-container">
            <button className={"dice-option-button" + actionClassName} onClick={() => {
                PlaySoundMp3("routerButton")
                document.querySelectorAll<HTMLButtonElement>('.dice-option-button').forEach(option => {
                    option.classList.add("fade-out")
                });
                let dieEl = document.querySelector<HTMLElement>('.die')
                if (dieEl) dieEl.click()
            }}>
                Tirar
            </button>
            <Dice
                overwriteCalc={overwriteCalc}
                confirm={(val: string) => { setDice(parseInt(val)) }}
                disabled={dice !== undefined || actionClassName !== ""}
            />
            <button className={"dice-option-button" + actionClassName} onClick={() => {
                PlaySoundMp3("routerButton")
                document.querySelectorAll<HTMLButtonElement>('.dice-option-button').forEach(option => {
                    option.classList.add("fade-out")
                });
                const die = document.querySelector<HTMLDivElement>('.die');
                if (die) die.setAttribute('data-face', "10");
                setTimeout(() => {
                    PlaySoundMp3("rollResult")
                    setDice(10)
                }, 500)
            }}>
                No tirar
            </button>
        </div>
    </section>
}