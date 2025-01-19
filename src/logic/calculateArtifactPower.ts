import { HotBarType } from "../vite-env"

export const calculateArtifactPower = (items: HotBarType) => {
    if (!items) return 0
    let total = 0
    for (let i = 0; i < items.artifacts.length; i++) if (items.artifacts[i] && items.artifacts[i].active) total += items.artifacts[i].power
    return total
}