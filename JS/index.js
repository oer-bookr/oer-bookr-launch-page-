const downBtn = document.querySelectorAll('.down-button').forEach(link => {
    link.addEventListener('click', event => {
        let elmntHeight = document.querySelector('.content-box').clientHeight;
        window.scrollBy(0, elmntHeight)
    })
})

const upBtn = document.querySelectorAll('.up-button').forEach(link => {
    link.addEventListener('click', event => {
        let elmntHeight = document.querySelector('.content-box').clientHeight;
        window.scrollBy(0, -elmntHeight)
    })
})
