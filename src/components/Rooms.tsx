import { DungeonRoom, router } from "../vite-env"

import ChestImg from "../assets/images/Chest.png"
import StairsImg from "../assets/images/Stairs.png"
import StairsUpImg from "../assets/images/StairsUp.png"
import BifurcationImg from "../assets/images/Bifurcation.png"
import TrifurcationImg from "../assets/images/Trifurcation.png"
import BigRoomImg from "../assets/images/BigRoom.png"
import SmallRoomImg from "../assets/images/SmallRoom.png"
import DoorImg from "../assets/images/Door.png"
import HallImg from "../assets/images/Hall.png"
import RewardImg from "../assets/images/Reward.png"
import BossImg from "../assets/images/Dungeon-Boss.jpeg"

export const RoomRouter: router = {
    "Entrada": () => { return Entrance() },
    "SalaChica": () => { return SmallRoom() },
    "SalaGrande": () => { return BigRoom() },
    "SalaChicaFin": () => { return SmallRoomEnd() },
    "SalaGrandeFin": () => { return BigRoomEnd() },
    "Pasillo": () => { return Hall() },
    "Bifurcacion": () => { return Bifurcation() },
    "Trifurcacion": () => { return Trifurcation() },
    "Puerta": () => { return Door() },
    "Boss": () => { return Boss() },
    "Premio": () => { return Reward() },
    "Tienda": () => { return Shop() },
    "Cofre": () => { return Chest() },
    "CofreEspecial": () => { return ChestEspecial() },
    "Escaleras": () => { return Stairs() },
    "EscalerasSubida": () => { return StairsUp() },
}


function Entrance() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsImg,
        room: "Entrada",
        enemys: [],
        routes: []
    }
    return room
}
function Stairs() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsImg,
        room: "Escaleras",
        enemys: [],
        routes: []
    }
    return room
}
function StairsUp() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsUpImg,
        room: "Escaleras de Subida",
        enemys: [],
        routes: []
    }
    return room
}
function Hall() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: HallImg,
        room: "Pasillo",
        enemys: [],
        routes: []
    }
    return room
}
function Bifurcation() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BifurcationImg,
        room: "Bifurcacion",
        enemys: [],
        routes: []
    }
    return room
}
function Trifurcation() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: TrifurcationImg,
        room: "Trifurcacion",
        enemys: [],
        routes: []
    }
    return room
}
function SmallRoom() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: SmallRoomImg,
        room: "Sala Chica",
        enemys: [],
        routes: []
    }
    return room
}
function BigRoom() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BigRoomImg,
        room: "Sala Grande",
        enemys: [],
        routes: []
    }
    return room
}
function SmallRoomEnd() {
    const posilities: {question: string, answer: string}[] = [
        {question: "No parece haber nada por esta zona...", answer: "Poner explosivos."},
        {question: "No parece haber nada por esta zona...", answer: "No hay nada."},
        {question: "Hay un espejo al final de la sala... arriba tiene escrito '¿Quién soy?'...", answer: "'Mi reflejo'."},
        {question: "Hay unos candelabros a los costados... parecieran formar un patrón de velas encendidas y apagadas...", answer: "Invertir velas."}
    ]

    let puzzle = Math.floor(Math.random() * posilities.length)

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: SmallRoomImg,
        room: "Sala Chica sin Salida",
        enemys: [],
        puzzle: {
            question: posilities[puzzle].question,
            answer: posilities[puzzle].answer
        },
        routes: []
    }
    return room
}
function BigRoomEnd() {

    const posilities: {question: string, answer: string}[] = [
        {question: "No parece haber nada por esta zona...", answer: "Poner explosivos."},
        {question: "No parece haber nada por esta zona...", answer: "No hay nada."},
        // "Estantería de Libros: Una librería con tomos antiguos y un mensaje grabado en una placa cercana que dice 'El conocimiento es poder'. Si se retira el libro correcto, un pequeño compartimento se abre dandote una llave de cofre.",
        // "Bodega de Vinos Polvorientos: Un barril tiene un mecanismo secreto; al girarlo, revela un pasadizo hacia una pequeña despensa secreta con una botella de vino antiguo que cura heridas a todos los jugadores.",
        // "Estantería de Libros: Una librería con tomos antiguos y un mensaje grabado en una placa cercana que dice 'El conocimiento es poder'. Si se retira el libro correcto, un pequeño compartimento se abre dandote una llave de cofre.",
        // "Pozo Profundo: Al fondo del callejón, hay un pozo oscuro del cual emana un frío antinatural. Al lanzar una moneda o un objeto dentro, el jugador recibe la informacion de un item aleatorio del rango de la dungeon.",
        // "Sarcófago Antiguo: Una vez que se intenta abrir, el sarcófago revela un pasadizo. En el interior, hay una momia inofensiva que sostiene un colgante de protección contra maldiciones. Sin embargo, si se toma, puede atraer a enemigos no-muertos.",
        // "Colonia de Hongos Luminosos: En el rincón, hay una serie de hongos brillantes que reaccionan al contacto. Si los tocas en el orden correcto, te dan una llave.",
        // "Lago Subterráneo: Cofre sumergido en el fondo, pequeños peces agresivos que lo muerden si permanece demasiado tiempo.",
    ]
    let puzzle = Math.floor(Math.random() * posilities.length)

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BigRoomImg,
        room: "Sala Grande sin Salida",
        enemys: [],
        routes: [],
        puzzle: {
            question: posilities[puzzle].question,
            answer: posilities[puzzle].answer
        },
    }
    return room
}
function Door() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: DoorImg,
        room: "Puerta",
        puzzle: undefined,
        enemys: [],
        routes: []
    }
    return room
}
function Boss() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BossImg,
        room: "Boss",
        enemys: [],
        routes: []
    }
    return room
}
function Reward() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: RewardImg,
        room: "Reward",
        enemys: [],
        routes: []
    }
    return room
}
function Chest() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: ChestImg,
        room: "Chest",
        enemys: [],
        routes: []
    }
    return room
}
function ChestEspecial() {

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: ChestImg,
        room: "Chest Especial",
        enemys: [],
        routes: []
    }
    return room
}
function Shop() {
    let room: DungeonRoom = {
        image: "",
        _id: `${Math.random() * Math.random()}`,
        room: "Shop",
        enemys: [],
        routes: []
    }
    return room
}

