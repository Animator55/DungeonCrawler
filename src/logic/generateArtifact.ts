import { artifacts } from "../default/artifacts";

export const generateArtifact = (rank: string)=>{
    if(!rank) return
    const array = artifacts[rank]
    let number = Math.floor(Math.random() * (array.length));
    return {...array[number]}
}
export const generatePickUp = ()=>{
    const array =artifacts["PickUps"]
    let roll = Math.floor(Math.random() * 20);
    let result = 0
    if(roll < 12) result = 0
    else if(roll >= 12 && roll < 19) result = 2
    else if(roll >= 19)result = 3

    return {...array[result], rank:"PickUps"}
}
export const generatePickUpRoom = ()=>{
    const array =artifacts["PickUps"]
    let result = 1
    // else if(roll >= 18 && roll < 20) result = Math.floor(Math.random()*24)+6
    // else if (roll > 20) result = Math.floor(Math.random()*6)+30

    return {...array[result], rank:"PickUps"}
}