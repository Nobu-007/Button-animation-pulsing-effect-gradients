


document.querySelectorAll(`.button-event`).forEach(btn => {
    btn.addEventListener(`click`, () => {
        document.querySelector(".btn-start").classList.toggle(`btn-left`)
        document.querySelector(".btn-random").classList.toggle(`btn-right`)
        setTimeout(() => {
            document.querySelector(".btn-start").classList.toggle(`btn-dissapear`)
            document.querySelector(".btn-random").classList.toggle(`btn-dissapear`)

            document.querySelector(".question-input").style.display = "block"
        }, "1000")
    })
});

document.querySelector(".go-back").addEventListener(`click`, () => {
    document.querySelector(".question-input").style.display = "none"

    document.querySelector(".btn-start").classList.toggle(`btn-dissapear`)
    document.querySelector(".btn-random").classList.toggle(`btn-dissapear`)

    setTimeout(() => {
        document.querySelector(".btn-start").classList.toggle(`btn-left`)
        document.querySelector(".btn-random").classList.toggle(`btn-right`)
    }, "0")

})