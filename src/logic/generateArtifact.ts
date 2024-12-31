import { artifacts } from "../default/artifacts";

export const generateArtifact = (rank: string)=>{
    if(!rank) return
    const array = artifacts[rank]
    let number = Math.floor(Math.random() * (array.length));
    return {...array[number], rank:rank}
}
export const generatePickUp = ()=>{
    const array =artifacts["PickUps"]
    let roll = Math.floor(Math.random() * 20);
    let result = 0
    if(roll < 10) result = 0
    else if (roll >= 10 && roll<14) result =4
    else if (roll >= 15 && roll<18) result =5
    else if(roll >= 18 && roll < 20) result = Math.floor(Math.random()*24)+6
    else if (roll > 20) result = Math.floor(Math.random()*6)+30

    return {...array[result], rank:"PickUps"}
}