/// <reference types="vite/client" />

export type router ={
    [key: string] : any
}

type enemyType = {
    index: number
    health: number
    currentHealth?: number
    icon?: string
    name: string
    description: string
    ghost?: boolean,
    power: number
    rank?:string
}

export type DungeonRoom = {
    _id: string
    image: string
    room: string
    puzzle?: {question: string, answer: string, otherAnswers: string[]}
    items?: any[]
    itemPicked?: boolean
    enemys: enemyType[] 
    routes: {
        roomToMoveIndex: number
        tag?: string[]
        moveFloor?: number
        direction: string
    }[]
}


export type HotBarType = {
    artifacts: any[];
    coins: number;
    level:number
}