import React from 'react'
import { RankColorSelector } from './logic/rankColorSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'
import { router } from './vite-env'
import DungeonPlay from './components/DungeonPlay'
import "./assets/app.css"

export default function App() {
  const [page, setPage] = React.useState("generate")
  const [rank, setRank] = React.useState("A")
  const [theme, setTheme] = React.useState("Goblins")

  const rankSelector = ["E", "D", "C", "B", "A", "S"]
  const themeSelector = ["Goblins", "FantasmasNoMuertos", "Bestias", "Elementales"]

  React.useEffect(() => {
      let stor = window.localStorage.getItem("Dungeon-Crawler-2")
      if(stor !== undefined && stor !== null && stor !== "")setPage("dungeon")
  })

  const Generator = () => {
      return <section className='dungeon-gen'
          style={{background: "linear-gradient(0deg,"+RankColorSelector[rank]+", transparent)"}}
      >
          <header>
              <h3>Dungeon Generator</h3>
          </header>
          <select value={rank} onChange={(e) => { setRank(e.target.value) }}>
              {rankSelector.map(el => {
                  return <option key={Math.random()}>
                      {el}
                  </option>
              })}
          </select>
          <select value={theme} onChange={(e) => { setTheme(e.target.value) }}>
              {themeSelector.map(el => {
                  return <option key={Math.random()}>
                      {el}
                  </option>
              })}
          </select>
          <button className='start-dungeon main-dungeon-button' onClick={() => {
              setPage("dungeon")
          }}>
              <FontAwesomeIcon icon={faDungeon} />
              <p>Start Dungeon</p>
          </button>
      </section>
  }
  const pages: router = {
      generate: <Generator />,
      dungeon: <DungeonPlay setPage={setPage} rank={rank} theme={theme} />
  }

  return <main>
    {pages[page]}
  </main>
}

