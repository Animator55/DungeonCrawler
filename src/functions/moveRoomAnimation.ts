export default function moveRoomAnimation(button: {
    roomToMoveIndex: number;
    tag?: string[];
    moveFloor?: number;
    direction: string;
}) {
    let image = document.querySelector<HTMLImageElement>(".back-image")
    if (image) {
        image.classList.remove("fade-from-right-image")
        image.offsetHeight
        image.classList.remove("fade-from-left-image")
        image.offsetHeight
        image.classList.remove("fade-from-front-image")
        image.offsetHeight
        image.classList.remove("fade-image")
        image.offsetHeight
        let classResult = "zoom-in-image-room"
        if (button.direction === "Atras" || button.direction === "Continuar") classResult = "zoom-out-image-room"
        else if (button.direction === "Derecha") classResult = "zoom-in-right-image-room"
        else if (button.direction === "Izquierda") classResult = "zoom-in-left-image-room"
        image.classList.add(classResult)
        image.offsetHeight
    }
}