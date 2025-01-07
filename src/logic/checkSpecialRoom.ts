export const checkIfRoomIsSpecial = (roomIndex: number, specialRooms: { index: number, room: string }[] | undefined) => {
        if (!specialRooms) return { value: false, icon: "" }
        let result = { value: false, icon: "" }
        for (let i = 0; i < specialRooms.length; i++) {
            if (roomIndex === specialRooms[i].index) {
                result = { value: true, icon: specialRooms[i].room }
                break
            }
        }
        return result
    }