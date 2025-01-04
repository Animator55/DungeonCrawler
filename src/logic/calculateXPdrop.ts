export const calculateXPdrop = (floor: number, room: string) => {
    const results = [5, 10, 20, 30, 40, 50]
    let addicion = 0
    if (room === "Boss") addicion = 5

    return results[floor]
}
export const calculateXP = (xpTotal: number) => {
    let level, xpForCurrentLevel, xpForNextLevel;

    if (xpTotal < 352) {
        // For levels 0–16
        level = Math.floor((-6 + Math.sqrt(36 + 4 * xpTotal)) / 2);
        xpForCurrentLevel = level ** 2 + 6 * level;
        xpForNextLevel = (level + 1) ** 2 + 6 * (level + 1);
    } else if (xpTotal < 1507) {
        // For levels 17–31
        level = Math.floor((40.5 + Math.sqrt(1620.25 - 10 * (360 - xpTotal))) / 5);
        xpForCurrentLevel = Math.floor(2.5 * level ** 2 - 40.5 * level + 360);
        xpForNextLevel = Math.floor(2.5 * (level + 1) ** 2 - 40.5 * (level + 1) + 360);
    } else {
        // For levels 32+
        level = Math.floor((162.5 + Math.sqrt(26462.25 - 18 * (2220 - xpTotal))) / 9);
        xpForCurrentLevel = Math.floor(4.5 * level ** 2 - 162.5 * level + 2220);
        xpForNextLevel = Math.floor(4.5 * (level + 1) ** 2 - 162.5 * (level + 1) + 2220);
    }

    const remainingXP = xpForNextLevel - xpTotal;

    return {
        level: level,
        remainingXP: remainingXP,
        xpForCurrentLevel: xpForCurrentLevel,
        xpForNextLevel: xpForNextLevel
    };
}
