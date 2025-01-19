export const saveItem = (newItem: {index: number}) => {
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked")
    if (!unlocked) return
    let splited = unlocked.split("-")
    if(splited.includes(`${newItem.index}`)) return
    else window.localStorage.setItem("Dungeon-Crawler-Unlocked", unlocked+"-"+newItem.index)
}
export const saveEnemy = (enemyIndex: number) => {
    let unlocked = window.localStorage.getItem("Dungeon-Crawler-Unlocked-Enemies")
    if (unlocked === null || unlocked === undefined ) return
    let splited = unlocked.split("-")
    console.log(splited)
    if(splited.includes(`${enemyIndex}`)) return
    else window.localStorage.setItem("Dungeon-Crawler-Unlocked-Enemies", unlocked+"-"+enemyIndex)
}