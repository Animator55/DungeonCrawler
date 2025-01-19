export const checkHealing =(prevVal: number, heal: string)=>{
    if(heal === "1") return prevVal + 15 > 100 ? 100 : prevVal + 15
    else if(heal === "2") return prevVal + 35 > 100 ? 100: prevVal + 35
    else if(heal === "3") return 100
    else return prevVal
}