import { faArchive, faBox, faDoorClosed, faShop, faStairs, faXmark } from "@fortawesome/free-solid-svg-icons";
import { router } from "../vite-env";

export const RouterSelector: router = {
    "Puerta": faDoorClosed,
    "Boss": faDoorClosed,
    "SalaChicaFin": faXmark,
    "SalaGrandeFin": faXmark,
    "Shop": faShop,
    "Tienda": faShop,
    "Cofre": faArchive,
    "CofreEspecial": faBox,
    "Chest": faArchive,
    "Chest Especial": faBox,
    "Escaleras": faStairs,
    "EscalerasSubida": faStairs,
    "Escaleras de Subida": faStairs,
}
