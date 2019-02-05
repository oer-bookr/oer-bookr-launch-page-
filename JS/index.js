// for use in random quote generator
// Math.round(Math.random() * 10)

// content box contructor
class ContentBox {
    constructor(contentSection) {
        this.contentSection = contentSection;
        // contentArray.push(this.contentSection);
        this.section = document.createElement('section');
        this.section.classList.add('content-box');
        this.section.dataset.section = `${this.contentSection["content box"]}`;
        this.data = this.section.dataset.section;
        // this.section.setAttribute('section', `${this.contentSection["content box"]}`)
        this.upScrolly = document.createElement('a');
        this.upScrolly.classList.add('up-button');
        this.content = document.createElement('div');
        this.content.classList.add('content');
        this.content.textContent = this.contentSection["text content"]
        this.downScrolly = document.createElement('a');
        this.downScrolly.classList.add('down-button');
        window.addEventListener('load', () => this.implement());
        this.upScrolly.addEventListener('click',() => this.scrollUp());
        this.downScrolly.addEventListener('click',() => this.scrollDown());
    }

    implement() {
        document.querySelector('.main-content').appendChild(this.section);
        if(this.contentSection["content box"] !== contentArray.length) {
            this.section.appendChild(this.upScrolly);
            this.section.appendChild(this.content);
            this.section.appendChild(this.downScrolly);
        } else {
            this.section.appendChild(this.upScrolly);
            this.section.appendChild(this.content);
        }
    }

    scrollUp() {
        let scrollUpTo = document.querySelector(`.content-box[data-section = '${this.data - 1}']`);
        console.log(scrollUpTo)
        scrollUpTo.scrollIntoView({
            behavior: "smooth"
        });
    }

    scrollDown() {
        let scrollDownTo = document.querySelector(`.content-box[data-section = '${this.data + 1}']`);
        console.log(scrollDownTo)
        scrollDownTo.scrollIntoView({
            behavior: "smooth"
        });
    }
}

let contentArray = [
    {"content box": 1, "text content": "I am the text content for content box 1"},
    {"content box": 2, "text content": "I am the text content for content box 2"},
    {"content box": 3, "text content": "I am the text content for content box 3"},
    {"content box": 4, "text content": "I am the text content for content box 4"},
    {"content box": 5, "text content": "I am the text content for content box 5"}
]

contentArray.forEach(content => new ContentBox(content))

