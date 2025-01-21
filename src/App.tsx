import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBookDead, faDungeon, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { router } from './vite-env'
import DungeonPlay from './components/DungeonPlay'
import "./assets/app.css"
import PlaySoundMp3 from './logic/playSound'
import Door from "./assets/images/Door.png"
import { EnemiesPop } from './components/pops/EnemiesPop'
import { ArtifactsPop } from './components/pops/ArtifactsPop'

export default function App() {
    let stor = window.localStorage.getItem("Dungeon-Crawler-2")
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked")
    let unlockedEnemies = window.localStorage.getItem("Dungeon-Crawler-Unlocked-Enemies")
    if (!unlocked) {
        window.localStorage.setItem("Dungeon-Crawler-Unlocked", "1-2-3-4-5-6-7-8-9")
        unlocked = "1-2-3-4-5-6-7-8-9"
    }
    if (!unlockedEnemies) {
        window.localStorage.setItem("Dungeon-Crawler-Unlocked-Enemies", "")
    }
    let boolean = stor !== undefined && stor !== null && stor !== ""
    const [page, setPage] = React.useState(boolean ? "dungeon" : "generate")
    const [pop, setPop] = React.useState<string | undefined>(undefined)


    const pops: router = {
        "artifacts": <ArtifactsPop setPop={setPop} />,
        "enemies": <EnemiesPop setPop={setPop} />,
    }

    const Generator = () => {
        return <section className='dungeon-gen'
        // style={{ background: "linear-gradient(0deg," + RankColorSelector["Elementales"] + ", transparent)" }}
        >
            <header>
                <h3>Dungeon Crawler</h3>
            </header>
            <section className='menu-content'>

                <div className='dungeon-options'>
                    <button onClick={() => { PlaySoundMp3("routerButton"); setPop("enemies") }}>
                        <FontAwesomeIcon icon={faBookDead} />
                        Enemigos
                    </button>
                    <button style={{ animationDelay: ".1s" }} onClick={() => { PlaySoundMp3("routerButton"); setPop("artifacts") }}>
                        <FontAwesomeIcon icon={faBookAtlas} />
                        Artefactos
                    </button>
                    <button style={{ animationDelay: ".2s" }} onClick={() => { PlaySoundMp3("routerButton"); window.close() }}>
                        <FontAwesomeIcon icon={faPersonRunning} />
                        Salir
                    </button>
                </div>
                {/* <select value={theme} onChange={(e) => { setTheme(e.target.value) }}>
                {themeSelector.map(el => {
                    return <option key={Math.random()}>
                        {el}
                    </option>
                })}
            </select> */}

                <button
                    style={{ backgroundImage: "url(" + Door + ")" }}
                    className='start-dungeon main-dungeon-button' onClick={() => {
                        PlaySoundMp3("routerButton");
                        let button = document.querySelector<HTMLButtonElement>(".start-dungeon.main-dungeon-button")
                        if (button) {
                            button.offsetTop
                            button.classList.add("dungeon-start-animated")
                            button.offsetTop
                        }

                        setTimeout(() => {
                            setPage("dungeon")
                        }, 200)
                    }}>
                    <p>
                        <FontAwesomeIcon icon={faDungeon} /> Entrar a la Dungeon</p>
                </button>
            </section>
        </section>
    }
    const pages: router = {
        generate: <Generator />,
        dungeon: <DungeonPlay setPage={setPage} setPop={setPop} />
    }

    return <main id="main">
        {pop ? pops[pop] : pages[page]}
    </main>
}

