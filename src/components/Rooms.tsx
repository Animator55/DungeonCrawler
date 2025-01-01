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
    "Entrada": (theme: string) => { return Entrance(theme) },
    "SalaChica": (theme: string) => { return SmallRoom(theme) },
    "SalaGrande": (theme: string) => { return BigRoom(theme) },
    "SalaChicaFin": (theme: string) => { return SmallRoomEnd(theme) },
    "SalaGrandeFin": (theme: string) => { return BigRoomEnd(theme) },
    "Pasillo": (theme: string) => { return Hall(theme) },
    "Bifurcacion": (theme: string) => { return Bifurcation(theme) },
    "Trifurcacion": (theme: string) => { return Trifurcation(theme) },
    "Puerta": (theme: string) => { return Door(theme) },
    "Boss": (theme: string) => { return Boss(theme) },
    "Premio": (theme: string) => { return Reward(theme) },
    "Tienda": (theme: string) => { return Shop(theme) },
    "Cofre": (theme: string) => { return Chest(theme) },
    "CofreEspecial": (theme: string) => { return ChestEspecial(theme) },
    "Escaleras": (theme: string) => { return Stairs(theme) },
    "EscalerasSubida": (theme: string) => { return StairsUp(theme) },
}


function Entrance(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsImg,
        room: "Entrada",
        enemys: [],
        routes: []
    }
    return room
}
function Stairs(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsImg,
        room: "Escaleras",
        enemys: [],
        routes: []
    }
    return room
}
function StairsUp(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: StairsUpImg,
        room: "Escaleras de Subida",
        enemys: [],
        routes: []
    }
    return room
}
function Hall(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: HallImg,
        room: "Pasillo",
        enemys: [],
        routes: []
    }
    return room
}
function Bifurcation(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BifurcationImg,
        room: "Bifurcacion",
        enemys: [],
        routes: []
    }
    return room
}
function Trifurcation(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: TrifurcationImg,
        room: "Trifurcacion",
        enemys: [],
        routes: []
    }
    return room
}
function SmallRoom(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: SmallRoomImg,
        room: "Sala Chica",
        enemys: [],
        routes: []
    }
    return room
}
function BigRoom(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BigRoomImg,
        room: "Sala Grande",
        enemys: [],
        routes: []
    }
    return room
}
function SmallRoomEnd(theme: string) {
    const posilities: {[key:string]:string[]} = {
        "Goblins": ["Sala Chica sin Salida"],
        "Fantasmas": [
            "Sala Chica sin Salida",
            "Espejo Misterioso en el Final del Pasillo: Al acercarse al espejo y decir en voz alta '¿Quién soy?', aparece una figura reflejada que entrega una pista importante o un amuleto de protección. Solo funciona una vez, y el reflejo luego se desvanece.",
            "Salón de Candelabros: Los candelabros en la pared parecen haber sido dispuestos en un patrón específico. Al encenderlos en el orden correcto, se abre un pequeño compartimento en la pared con una llave misteriosa.",
        ],
        "NoMuertos": ["Sala Chica sin Salida",
            "Pozo Profundo: Al fondo del callejón, hay un pozo oscuro del cual emana un frío antinatural. Al lanzar una moneda o un objeto dentro, el jugador recibe la informacion de un item aleatorio del rango de la dungeon.",
            "Sarcófago Antiguo: Una vez que se intenta abrir, el sarcófago revela un pasadizo. En el interior, hay una momia inofensiva que sostiene un colgante de protección contra maldiciones. Sin embargo, si se toma, puede atraer a enemigos no-muertos."
        ],
        "FantasmasNoMuertos": ["Sala Chica sin Salida",
            "Espejo Misterioso en el Final del Pasillo: Al acercarse al espejo y decir en voz alta '¿Quién soy?', aparece una figura reflejada que entrega una pista importante o un amuleto de protección. Solo funciona una vez, y el reflejo luego se desvanece.",
            "Salón de Candelabros: Los candelabros en la pared parecen haber sido dispuestos en un patrón específico. Al encenderlos en el orden correcto, se abre un pequeño compartimento en la pared con una llave misteriosa.",
            "Sarcófago Antiguo: Una vez que se intenta abrir, el sarcófago revela un pasadizo. En el interior, hay una momia inofensiva que sostiene un colgante de protección contra maldiciones. Sin embargo, si se toma, puede atraer a enemigos no-muertos."
        ],
        "Bestias": [
            "Sala Chica sin Salida",
            "Estalactitas Ecópicas: Al acercarse a ciertas estalactitas, estas producen sonidos. Tocarlas en una secuencia específica (marcada en runas en la pared) genera un eco que revela un pasaje secreto hacia una sala oculta, donde se puede encontrar un arma o una herramienta especial.",
            "Túnel Infestado de Murciélagos: Al final del túnel, un murciélago lleva un collar brillante. Los jugadores deben moverse despacio y no hacer ruido para tomarlo sin despertar a los murciélagos, o prepararse para una pequeña batalla si los espantan."
        ],
        "Elementales": ["Sala Chica sin Salida"]
    }

    let puzzle = Math.floor(Math.random() * posilities[theme].length)

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: SmallRoomImg,
        room: "Sala Chica sin Salida",
        enemys: [],
        puzzle: {
            question: posilities[theme][puzzle],
            answer: ""
        },
        routes: []
    }
    return room
}
function BigRoomEnd(theme: string) {

    const posilities: {[key:string]:string[]} = {
        "Goblins": ["Sala Grande sin Salida"],
        "Fantasmas": [
            "Sala Grande sin Salida",
            "Estantería de Libros: Una librería con tomos antiguos y un mensaje grabado en una placa cercana que dice 'El conocimiento es poder'. Si se retira el libro correcto, un pequeño compartimento se abre dandote una llave de cofre.",
            "Bodega de Vinos Polvorientos: Un barril tiene un mecanismo secreto; al girarlo, revela un pasadizo hacia una pequeña despensa secreta con una botella de vino antiguo que cura heridas a todos los jugadores.",
        ],
        "NoMuertos": ["Sala Grande sin Salida",
            "Pozo Profundo: Al fondo del callejón, hay un pozo oscuro del cual emana un frío antinatural. Al lanzar una moneda o un objeto dentro, el jugador recibe la informacion de un item aleatorio del rango de la dungeon.",
            "Sarcófago Antiguo: Una vez que se intenta abrir, el sarcófago revela un pasadizo. En el interior, hay una momia inofensiva que sostiene un colgante de protección contra maldiciones. Sin embargo, si se toma, puede atraer a enemigos no-muertos."
        ],
        "FantasmasNoMuertos": ["Sala Grande sin Salida",
            "Bodega de Vinos Polvorientos: Un barril tiene un mecanismo secreto; al girarlo, revela un pasadizo hacia una pequeña despensa secreta con una botella de vino antiguo que cura heridas a todos los jugadores.",
            "Estantería de Libros: Una librería con tomos antiguos y un mensaje grabado en una placa cercana que dice 'El conocimiento es poder'. Si se retira el libro correcto, un pequeño compartimento se abre dandote una llave de cofre.",
            "Pozo Profundo: Al fondo del callejón, hay un pozo oscuro del cual emana un frío antinatural. Al lanzar una moneda o un objeto dentro, el jugador recibe la informacion de un item aleatorio del rango de la dungeon.",
            "Sarcófago Antiguo: Una vez que se intenta abrir, el sarcófago revela un pasadizo. En el interior, hay una momia inofensiva que sostiene un colgante de protección contra maldiciones. Sin embargo, si se toma, puede atraer a enemigos no-muertos."
        ],
        "Bestias": [
            "Sala Grande sin Salida",
            "Lago Subterráneo: Cofre sumergido en el fondo, pequeños peces agresivos que lo muerden si permanece demasiado tiempo.",
            "Colonia de Hongos Luminosos: En el rincón, hay una serie de hongos brillantes que reaccionan al contacto. Si los tocas en el orden correcto, te dan una llave."
        ],
        "Elementales": ["Sala Grande sin Salida"]
    }
    let puzzle = Math.floor(Math.random() * posilities[theme].length)

    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BigRoomImg,
        room: "Sala Grande sin Salida",
        enemys: [],
        routes: [],
        puzzle: {
            question: posilities[theme][puzzle],
            answer: ""
        },
    }
    return room
}
function Door(theme: string) {
    console.log(theme)
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
function Boss(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: BossImg,
        room: "Boss",
        enemys: [],
        routes: []
    }
    return room
}
function Reward(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: RewardImg,
        room: "Reward",
        enemys: [],
        routes: []
    }
    return room
}
function Chest(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: ChestImg,
        room: "Chest",
        enemys: [],
        routes: []
    }
    return room
}
function ChestEspecial(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        _id: `${Math.random() * Math.random()}`,
        image: ChestImg,
        room: "Chest Especial",
        enemys: [],
        routes: []
    }
    return room
}
function Shop(theme: string) {
    console.log(theme)
    let room: DungeonRoom = {
        image: "",
        _id: `${Math.random() * Math.random()}`,
        room: "Shop",
        enemys: [],
        routes: []
    }
    return room
}

