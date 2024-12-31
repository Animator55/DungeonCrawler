/// <reference types="vite/client" />

export type router ={
    [key: string] : any
}

type enemyType = {
    icon?: string
    name: string
    description: string
    ghost?: boolean,
}

export type DungeonRoom = {
    _id: string
    image: string
    room: string
    puzzle?: {question: string, answer: string}
    items?: any[]
    enemys: enemyType[] 
    routes: {
        roomToMoveIndex: number
        tag?: string[]
        moveFloor?: number
        direction: string
    }[]
}