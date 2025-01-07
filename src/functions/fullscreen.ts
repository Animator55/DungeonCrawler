export const fullscreen = () => {
    let elem = document.getElementById('main')
    if (!elem) return
    if (elem.requestFullscreen) elem.requestFullscreen()
}