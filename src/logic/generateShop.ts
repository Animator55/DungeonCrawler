import { generateArtifact, generatePickUp } from "./generateArtifact"

export const generateShop = (luck: boolean, currentFloor: number) => {
    let amount = luck ? 3 : Math.floor(Math.random() * 2) + 2
    let list = []
    const ranks = [
        "E","D", "C","B", "A", "S"
    ]
    while (amount > 0) {
        amount--
        let rank = Math.random() > 0.85 && currentFloor < 5 ? (currentFloor+1): currentFloor
        // Math.floor(Math.random()*5)
        list.push(generateArtifact(ranks[rank]))
    }
    let amountPick = luck ? 3 : Math.floor(Math.random() * 2) + 1
    while (amountPick > 0) {
        amountPick--
        list.push(generatePickUp())
    }
    // window.localStorage.setItem("DnD-shop", JSON.stringify(list))

    return list
}