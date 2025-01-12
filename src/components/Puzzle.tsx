import React from "react"
import { generateLifeColor } from "../logic/generateLifeColor"
import { pickPuzzle } from "../logic/pickPuzzle"
import PlaySoundMp3 from "../logic/playSound"

type Props = {
    puzzle: {
        question: string
        answer: string
    }
    floor: number
    room: number
    setLife: Function
    removePuzzle: Function
}
let rankArray = ["E", "D", "C", "B", "A", "S"]

export const Puzzle = ({ puzzle, floor, room, setLife, removePuzzle }: Props) => {
    if (puzzle === undefined) return
    let answ1 = puzzle.answer
    let answ2 = ""
    let answ3 = ""
    if (answ1 !== "") {
        while (answ2 === "" || answ2 === answ1) {
            answ2 = pickPuzzle(rankArray[floor]).answer
        }
        while (answ3 === "" || answ3 === answ1 || answ3 === answ2) {
            answ3 = pickPuzzle(rankArray[floor]).answer
        }
    }
    let answers = [answ1, answ2, answ3].sort(() => Math.random() - 0.5)

    const show = (e?: React.MouseEvent) => {
        let section = document.getElementById("event-show") as HTMLDivElement
        if (!section) return
        let bool = section.style.opacity === "1"
        if (e) {
            let target = e.target as HTMLButtonElement
            if(target)target.style.borderColor = "#29ff00"
        }
        let currentRoom = room
        section.style.pointerEvents = bool ? "none" : "all"
        PlaySoundMp3("rollResult")
        setTimeout(() => {
            section.style.opacity = bool ? "0" : "1"
            setTimeout(() => {
                removePuzzle(currentRoom)
            }, 300);
        },500)
    }

    React.useEffect(()=>{
        PlaySoundMp3("inspect")
    },[])

    return <section id='event-show' className='puzzle-pop' style={{ opacity: 1 }}>
        <p>{puzzle.question}</p>
        {answers.map(el => {
            return <button
                key={Math.random()}
                onClick={(e) => {
                    if (el === answ1) show(e)
                    else {
                        let main = document.getElementById("main")
                        if (main) {
                            main.classList.add("damage")
                            PlaySoundMp3("attackPlayer")
                            setTimeout(() => {
                                if (main) main.classList.remove("damage")
                            }, 550)
                        }
                        let target = e.target as HTMLButtonElement
                        if(target)target.style.borderColor = "red"
                        let span = document.querySelector(".life-bar") as HTMLDivElement
                        if (span) {
                            let val = parseFloat(span.style.width.split("%")[0]) - 10
                            span.style.width = (val) + "%"
                            span.style.backgroundColor = generateLifeColor(val)
                        }
                        setTimeout(() => {
                            setLife()
                        }, 1000)
                    }
                }}
            >
                {el}
            </button>
        })}
    </section>
}