import { generateLifeColor } from "../logic/generateLifeColor"
import { pickPuzzle } from "../logic/pickPuzzle"

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
        if (e) e.currentTarget.textContent = !bool ? "Hide" : "Show"
        section.style.opacity = bool ? "0" : "1"
        section.style.pointerEvents = bool ? "none" : "all"
        let currentRoom = room
        setTimeout(() => {
            removePuzzle(currentRoom)
        }, 300)
    }

    return <section id='event-show' className='puzzle-pop' style={{ opacity: 1 }}>
        <p>{puzzle.question}</p>
        {answers.map(el => {
            return <button
                key={Math.random()}
                onClick={() => {
                    if (el === answ1) show()
                    else {
                        let main = document.getElementById("main")
                        if (main) {
                            main.classList.add("damage")
                            setTimeout(() => {
                                if (main) main.classList.remove("damage")
                            }, 550)
                        }
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