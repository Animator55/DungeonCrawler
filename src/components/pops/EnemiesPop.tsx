import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { dungeonEnemies } from "../../default/dungeonEnemies"
import { RankColorSelector } from "../../logic/rankColorSelector"
import PlaySoundMp3 from "../../logic/playSound"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { enemyType } from "../../vite-env"
import { iconSelectorObj } from "../../logic/iconSelectorObj"
import React from "react"

const convertEnemiesListToArray = (list: { [key: string]: enemyType[] | { [key: string]: enemyType[] } }) => {
    let result: enemyType[][] = []
    for (const rank in list) {
        if (rank !== "Boss") result.push(list[rank] as enemyType[])
        else result.push(Object.values(list[rank]))
    }
    return result
}

let rankArray = ["E", "D", "C", "B", "A", "S", "Boss"]
export const EnemiesPop = ({ setPop }: { setPop: Function }) => {
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked-Enemies")
    if (unlocked === null || unlocked === undefined) return
    let artifactArray: enemyType[][] = convertEnemiesListToArray(dungeonEnemies.Goblins)
    let splited = unlocked === "" ? [] : unlocked.split("-")
    let amountTotal = 0
    let list = artifactArray.map((rank: enemyType[], i) => {
        return <React.Fragment key={Math.random()}>
            <label>Rango {rankArray[i]}</label><ul>
                {rank.map((art) => {
                    let unlockedItem = splited.includes(`${art.index}`)
                    amountTotal++
                    return <li key={Math.random()} className={unlockedItem ? "" : "shadow"} style={{ borderColor: RankColorSelector[rankArray[i]] }}>
                        {iconSelectorObj[art.icon!]}
                        <p>{unlockedItem ? art.name : "???"}</p>
                    </li>
                })}
            </ul>
        </React.Fragment>
    })
    return <div className='back-blur'>
        <div className='pop'>
            <header>
                <h4>Enemigos</h4>
                <p>
                    {splited.length} / {amountTotal}
                </p>
                <button onClick={() => { PlaySoundMp3("routerButton"); setPop(undefined) }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </header>
            <section>
                {list}
            </section>
        </div>
    </div>
}