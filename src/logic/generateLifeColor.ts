export const generateLifeColor = (percentage: number)=>{
    let red, green, blue = 0;

    if (percentage > 50) {
        // Transición de verde a amarillo/naranja
        green = 255;
        red = Math.round(255 * (1 - (percentage - 50) / 50));
    } else {
        // Transición de amarillo/naranja a rojo
        red = 255;
        green = Math.round(255 * (percentage / 50));
    }

    return `rgb(${red}, ${green}, ${blue})`;
}