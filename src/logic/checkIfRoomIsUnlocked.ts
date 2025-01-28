export const checkIfRoomIsUnlocked = (tag: string, specialRooms: {
    index: number;
    room: string;
    unlocked: boolean;
}[] | undefined)=>{
    if(!specialRooms)return 
    let result = false
    for(let i=0; i<specialRooms.length; i++){
        if(specialRooms[i].room === tag && specialRooms[i].unlocked) {
            result = true
            break
        }
    }
    return result
}