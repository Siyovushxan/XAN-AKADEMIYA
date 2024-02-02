let darslarHtml = document.querySelector(".darslar-html")
let darslarCss = document.querySelector(".darslar-css")
let darslarBootstrap = document.querySelector(".darslar-bootstrap")
let darslarJs = document.querySelector(".darslar-js")

let arr = [darslarHtml, darslarCss, darslarBootstrap, darslarJs]

function DarslarHtml() {
    if (darslarHtml.style.display === 'none') {
        darslarHtml.style.display = 'block'
    } else {
        darslarHtml.style.display = 'none'
    }
}

function DarslarCss() {
    if (darslarCss.style.display === 'none') {
        darslarCss.style.display = 'block'
    } else {
        darslarCss.style.display = 'none'
    }
}

function DarslarBootstrap() {
    if (darslarBootstrap.style.display === 'none') {
        darslarBootstrap.style.display = 'block'
    } else {
        darslarBootstrap.style.display = 'none'
    }
}

function DarslarJs() {
    if (darslarJs.style.display === 'none') {
        darslarJs.style.display = 'block'
    } else {
        darslarJs.style.display = 'none'
    }
}

