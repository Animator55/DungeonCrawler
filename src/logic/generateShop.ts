import { generateArtifact, generatePickUp } from "./generateArtifact"

export const generateShop = (luck: boolean) => {
    let amount = luck ? 3 : Math.floor(Math.random() * 3) + 1
    let list = []
    while (amount > 0) {
        amount--
        let rank = Math.floor(Math.random()*5)
        const ranks = [
            "D", "C","B", "A", "S"
        ]
        list.push(generateArtifact(ranks[rank]))
    }
    let amountPick = luck ? 3 : Math.floor(Math.random() * 3) + 1
    while (amountPick > 0) {
        amountPick--
        list.push(generatePickUp())
    }
    // window.localStorage.setItem("DnD-shop", JSON.stringify(list))

    return list
}