let bg = document.querySelector(".slider")
let action = document.querySelector(".action")

function parallax(element) {
    let height = element.offsetHeight
    if (window.scrollY>element.offsetTop-height) {
        element.style.backgroundPositionY = `-${window.scrollY/5}px`
    }
}

window.onscroll = () => {
    parallax(bg)
    parallax(action)
}