import { puzzles } from "../default/puzzles";

export const pickPuzzle = (rank: string) =>{
    let array = puzzles[rank]
    let number = Math.floor(Math.random() * (array.length));

    return {question: array[number].question, answer: array[number].answer}
}