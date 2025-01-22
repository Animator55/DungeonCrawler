import { artifacts } from "../default/artifacts"
import { defaultItems } from "../default/defaultItems"

const checkUnlockedFloors = (unlocked:string) =>{ /// checks basing which bosses did the player killed and unlocked
    let splited = unlocked.split("-")
    if(splited.includes("59"))return 5
    else if(splited.includes("58")) return 3
    else if(splited.includes("57")) return 2
    else return 1
}

export const generateDefaultItems = () => {
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked")
    let unlockedEnemies = window.localStorage.getItem("Dungeon-Crawler-Unlocked-Enemies")
    if (!unlocked) return defaultItems
    let artifactArray = [...Object.values(artifacts).filter((el, i) => {
        if (i !== 0) return el
    })]
    artifactArray = artifactArray.flat(2)
    let splited = unlocked.split("-")
    let artifactAmount = unlockedEnemies !== null ? checkUnlockedFloors(unlockedEnemies): 1
    let artifactResult = []
    for(let j=0; j<artifactAmount; j++){
        let randomIndexOfSplited = Math.floor(Math.random() * splited.length)
        let artifactIndex = splited[randomIndexOfSplited]
        artifactResult.push({ ...artifactArray[parseInt(artifactIndex)], active: true })
    }
    let result = {
        level: Math.floor(Math.random() * 30) * artifactAmount,
        artifacts: artifactResult,
        coins: Math.floor(Math.random() * 12) * artifactAmount
    }
    return result
}