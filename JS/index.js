// scrolly funcs
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

// something I gotta describe l8r
const contentArray = [];
const mainContent = document.querySelector('.main-content');

// content box contructor
class ContentBox {
    constructor(content) {
        this.content = content;
        contentArray.push(this.content);
        this.section = document.createElement('section');
        this.section.classList.add('content-box');
        this.upScrolly = document.createElement('a');
        this.upScrolly.classList.add('up-button');
        
        this.downScrolly = document.createElement('a');
        this.downScrolly.classList.add('up-button');
    }

    BoxLayerOuter() {
        console.log(contentArray)
    }
}

let contentBox1 = new ContentBox ({
    "content box": 1,
    "textContnent": "I am the text content for content box 1"
})

let contentBox2 = new ContentBox ({
    "content box": 2,
    "textContnent": "I am the text content for content box 2"
})

console.log(contentArray.length);

