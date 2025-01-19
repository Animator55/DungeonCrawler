import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PlaySoundMp3 from "../../logic/playSound"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { artifacts } from "../../default/artifacts"
import React from "react"
import { iconSelectorObj } from "../../logic/iconSelectorObj"
import { RankColorSelector } from "../../logic/rankColorSelector"

let rankArray = ["E", "D", "C", "B", "A", "S"]
export const ArtifactsPop = ({ setPop }: { setPop: Function }) => {
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked")
    if (unlocked === null || unlocked === undefined) return
    let artifactArray = Object.values(artifacts)
    let splited = unlocked.split("-")
    let amountTotal = 0
    let list = artifactArray.map((rank, i) => {
        if (i === 0) return null
        return <React.Fragment key={Math.random()}>
            <label>Rango {rankArray[i - 1]}</label>
            <ul>
                {rank.map((art: { name: string, index: number }) => {
                    let unlockedItem = splited.includes(`${art.index}`)
                    amountTotal++
                    return <li key={Math.random()} className={unlockedItem ? "" : "shadow"} style={{ borderColor: RankColorSelector[rankArray[i - 1]] }}>
                        <FontAwesomeIcon icon={iconSelectorObj[art.name.split(" ")[0]]} />
                        <p>{unlockedItem ? art.name : "???"}</p>
                    </li>
                })}
            </ul>
        </React.Fragment>
    })
    return <div className='back-blur'>
        <div className='pop'>
            <header>
                <h4>Artefactos</h4>
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