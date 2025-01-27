import { puzzles } from "../default/puzzles";

export const pickPuzzle = (rank: string) =>{
    let array = puzzles[rank]
    let number = Math.floor(Math.random() * (array.length));
    let number2 = Math.floor(Math.random() * (array.length))
    let number3 = Math.floor(Math.random() * (array.length))
    while (number2 === number) {
        number2 = Math.floor(Math.random() * (array.length))
    }
    while (number3 === number || number3 === number2) {
        number3 = Math.floor(Math.random() * (array.length))
    }

    return {question: array[number].question, 
        answer: array[number].answer,
        otherAnswers: [array[number2].answer, array[number3].answer]
    }
}