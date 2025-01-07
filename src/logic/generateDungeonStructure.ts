import { RoomRouter } from "../components/Rooms"
import { dungeonEnemies } from "../default/dungeonEnemies"
import { DungeonRoom, router } from "../vite-env"
import { generateShop } from "./generateShop"
import { pickPuzzle } from "./pickPuzzle"

const specialRoomsValues: router = {
    "E": 2, "D": 2, "C": 2, "B": 2, "A": 2, "S": 2
}
const floorsLength: router = {
    "E": 4, "D": 4, "C": 4, "B": 4, "A": 4, "S": 5
}
const enemiesEncountersValues: router = {
    "E": 5, "D": 6, "C": 7, "B": 8, "A": 10, "S": 14
}
const randomBifurcations: router = {
    "E": 0, "D": 1, "C": 2, "B": 3, "A": 4, "S": 4
}

const generateEnemies = (rank: string, theme: string, array: DungeonRoom[]) => {
    let newArray = array
    let pickableArray: number[] = []

    for (let i = 0; i < newArray.length; i++) { /// generating allowed rooms to place enemies
        if (newArray[i].enemys.length === 0 && (newArray[i].room === "Pasillo"
            || newArray[i].room === "Sala Chica"
            || newArray[i].room === "Sala Grande")) pickableArray.push(i)
    }

    if (pickableArray.length === 0) return { array: array, conclusion: false }
    let random = Math.floor(Math.random() * pickableArray.length)
    let roomIndex = pickableArray[random]

    let rankAdding = 0
    if(rank === "D") rankAdding =1 
    else if(rank === "C") rankAdding =2 
    else if(rank === "B") rankAdding =2 
    else if(rank === "A") rankAdding =3 
    else if(rank === "S") rankAdding =3 

    let amount = rank === "S" ? Math.floor(Math.random() * 3) + rankAdding : Math.floor(Math.random() * 2) + rankAdding
    let enemiesArray = []
    let list = dungeonEnemies[theme][rank]
    for (let i = 0; i < amount; i++) {
        let random = Math.floor(Math.random() * list.length)
        let enemy = list[random]
        enemiesArray.push({...enemy, rank: rank, currentHealth: enemy.health})
    }

    let result = newArray.map((el, i) => {
        if (i === roomIndex) return { ...el, enemys: enemiesArray }
        else return el
    })
    return { array: result, conclusion: true }
}

const makeIntersection = (array: DungeonRoom[], end: string, theme: string) => {
    let newArray = array
    let pickableArray: number[] = []

    for (let i = 0; i < array.length; i++) {
        if (array[i].room === "Pasillo" || array[i].room === "Bifurcacion") pickableArray.push(i)
    }
    let random = Math.floor(Math.random() * pickableArray.length)
    let index = pickableArray[random]
    let isHall = newArray[index].room === "Pasillo"
    let newRoom = isHall ? "Bifurcacion" : "Trifurcacion"

    let newRoutes: { roomToMoveIndex: number, tag?: string[], direction: string }[] = []
    if (isHall) {
        let routes = [
            { roomToMoveIndex: newArray[index].routes[1].roomToMoveIndex, tag: newArray[index].routes[1].tag, direction: "" },
            { roomToMoveIndex: array.length, tag: [end], direction: "" }
        ]
        let sorted = routes.sort(() => Math.random() - 0.5)
        let directions = ["Derecha","Izquierda"]
        newRoutes = [
            newArray[index].routes[0],
            ...sorted.map((el, o) => { return { ...el, direction: directions[o] } })
        ]
    }
    else {
        let routes = [
            { roomToMoveIndex: newArray[index].routes[1].roomToMoveIndex, tag: newArray[index].routes[1].tag, direction: "" },
            { roomToMoveIndex: newArray[index].routes[2].roomToMoveIndex, tag: newArray[index].routes[2].tag, direction: "" },
            { roomToMoveIndex: array.length, tag: [end], direction: "" }
        ]

        let sorted = routes.sort(() => Math.random() - 0.5)
        let directions = [  "Derecha","Adelante","Izquierda"]

        newRoutes = [
            newArray[index].routes[0],
            ...sorted.map((el, o) => { return { ...el, direction: directions[o] } })
        ]
    }

    let result = newArray.map((el, i) => {
        if (i === index) return { ...RoomRouter[newRoom](theme), routes: newRoutes }
        else return el
    })

    return { array: result, index: index }
}


export default function generateDungeonStructure(theme: string) {

    let rankArray = ["E", "D", "C", "B", "A", "S"]
    let rank = rankArray[0]
    let floor = rankArray.length
    // let floor = 1
    let floorLength = floorsLength[rank]
    let specialRooms = specialRoomsValues[rank]
    let enemiesEncounters = enemiesEncountersValues[rank]
    let randomPaths = randomBifurcations[rank]


    const generateMainRoute = (begginng: string | undefined, length: number, end: string, prev?: DungeonRoom[], prevEnd?: number) => {
        let result: DungeonRoom[] = !begginng ?
            prev ? prev : []
            : prevEnd ? [{ ...RoomRouter[begginng](theme), routes: [{ moveFloor: -1, roomToMoveIndex: prevEnd, direction: "Subir" }, { roomToMoveIndex: 1, direction: "Continuar" }] }]
                : [{ ...RoomRouter[begginng](theme), routes: [{ roomToMoveIndex: 1, direction: "Adelante" }] }]
        let iterations = result.length

        for (let i = iterations; i <= (length + iterations); i++) {
            if (i === 0) break
            let rand = Math.random()
            let roomName = result[i - 1].room === "Pasillo" ?
                ((rand > 0.5) ? "SalaChica" : "SalaGrande")
                : "Pasillo"

            let prevIndex = i - 1
            if (prev && i === iterations) {
                let { array, index } = makeIntersection(result, end, theme)
                result = array
                prevIndex = index
            }
            result.push({ ...RoomRouter[roomName](theme), routes: [{ roomToMoveIndex: prevIndex, direction: "Atras" }, { roomToMoveIndex: i + 1, tag: [end], direction: "Adelante" }] })
        }
        if (end === "Boss") {
            let enemy = dungeonEnemies[theme].Boss[rank]
            let boss = theme === "FantasmasNoMuertos" ? [
                {...dungeonEnemies["Fantasmas"].Boss[rank], rank: rank, currentHealth: dungeonEnemies["Fantasmas"].Boss[rank].health},
                {...dungeonEnemies["NoMuertos"].Boss[rank], rank: rank,currentHealth: dungeonEnemies["NoMuertos"].Boss[rank].health}] 
                : 
            [{...enemy, rank: rank, currentHealth: enemy.health}]
            result.push({
                ...RoomRouter["Puerta"](theme),
                puzzle: pickPuzzle(Math.random() > 0.5 ? rank : rank === "E" ? "E" : rankArray[rankArray.indexOf(rank) - 1]),
                routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { roomToMoveIndex: result.length + 1, direction: "Adelante" }]
            })
            result.push({
                ...RoomRouter["Boss"](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { roomToMoveIndex: result.length + 1, direction: "Adelante" }],
                enemys: boss
            })
            result.push({ ...RoomRouter["Premio"](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }] })
        }
        else if (end === "Escaleras") {
            // if (rank === "S") {
                result.push({
                    ...RoomRouter["Puerta"](theme),
                    puzzle: pickPuzzle(rankArray[rankArray.indexOf(rank)]),
                    routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { roomToMoveIndex: result.length + 1, direction: "Adelante" }]
                })
                result.push({
                    ...RoomRouter["Boss"](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { roomToMoveIndex: result.length + 1, direction: "Adelante" }],
                    enemys: [{...dungeonEnemies[theme].Boss[rank], rank: rank, currentHealth: dungeonEnemies[theme].Boss[rank].health}]
                })
                result.push({ ...RoomRouter["Escaleras"](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { moveFloor: +1, roomToMoveIndex: 0, direction: "Bajar" }] })
            // }
            // else result.push({ ...RoomRouter["Escaleras"](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }, { moveFloor: +1, roomToMoveIndex: 0, direction: "Bajar" }] })
        }
        else if (end === "Tienda") {
            result.push({
            ...RoomRouter[end](theme),
            items: generateShop(false),
            routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }]
        })}
        else if (end === "Cofre") {
            result.push({
            ...RoomRouter[end](theme),
            itemPicked: false,
            routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }]
        })}
        else result.push({ ...RoomRouter[end](theme), routes: [{ roomToMoveIndex: result.length - 1, direction: "Atras" }] })
        return result
    }


    let result: DungeonRoom[][] = []

    for (let fi = 0; fi < floor; fi++) {
        let floorResult = undefined
        ///main
        let begginng = fi === 0 ? "Entrada" : "EscalerasSubida"
        let end = fi === floor - 1 ? "Boss" : "Escaleras"
        let prevEnd = floorLength + 1 +1 + 1+1
        floorResult = generateMainRoute(begginng, floorLength, end, floorResult, fi !== 0 ? result.length !== 0 ? prevEnd : undefined : undefined)

        ///specials

        for (let spe = 0; spe < specialRooms; spe++) {
            let endSpe = spe === 0 ? "Tienda" : "Cofre"
            floorResult = generateMainRoute(undefined, Math.round(floorLength / 2), endSpe, floorResult)
        }
        for (let rand = 0; rand < randomPaths; rand++) {
            let endrand = Math.random() < 0.5 ? "SalaChicaFin" : "SalaGrandeFin"
            floorResult = generateMainRoute(undefined, Math.round(floorLength / 3), endrand, floorResult)
        }
        for (let enemys = 0; enemys < enemiesEncounters; enemys++) {
            let { array, conclusion } = generateEnemies(rank, theme, floorResult)
            floorResult = array
            if (!conclusion) break
        }
        result.push(floorResult)
        rank = rankArray[fi+1]
    }
    return result
}