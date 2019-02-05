// for use in random quote generator
// Math.round(Math.random() * 10)

// content box contructor
class ContentBox {
    constructor(contentSection) {
        this.contentSection = contentSection;

        // content box
        this.section = document.createElement('section');
        this.section.classList.add('content-box');
        this.section.dataset.section = `${this.contentSection["content box"]}`;
        this.data = this.section.dataset.section;

        // scrollys
        this.upScrolly = document.createElement('div');
        this.upScrolly.classList.add('up-button');
        this.upScrolly.dataset.upButton = `${this.contentSection["content box"]}`;
        this.downScrolly = document.createElement('div');
        this.downScrolly.classList.add('down-button');
        this.downScrolly.dataset.downButton = `${this.contentSection["content box"]}`;

        // content
        this.content = document.createElement('div');
        this.content.classList.add('content');
        this.textContent = document.createElement('p');
        this.textContent.textContent = this.contentSection["text content"];
        this.imageContent = document.createElement('img');
        this.imageContent.src = this.contentSection["image source"];
        this.content.appendChild(this.textContent);
        this.content.appendChild(this.imageContent);

        // event listeners
        window.addEventListener('load', () => this.implement());
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
            this.section.appendChild(this.downScrolly);
            this.downScrolly.classList.add('hide');
        }
    }
}


// page content
let contentArray = [
    {"content box": 1, "text content": "I am the text content for content box 1", "image source": "/Images/bookstack.jpg"},
    {"content box": 2, "text content": "I am the text content for content box 2", "image source": "/Images/bookstack.jpg"},
    {"content box": 3, "text content": "I am the text content for content box 3", "image source": "/Images/bookstack.jpg"},
    {"content box": 4, "text content": "I am the text content for content box 4", "image source": "/Images/bookstack.jpg"},
    {"content box": 5, "text content": "I am the text content for content box 5", "image source": "/Images/bookstack.jpg"}
]

contentArray.forEach(content => new ContentBox(content));

window.addEventListener('load', event => {
    document.querySelectorAll('.down-button').forEach(button => {
        button.addEventListener('click', event => {
            document.querySelector(`.content-box[data-section = '${parseInt(button.dataset.downButton) + 1}']`).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
    document.querySelectorAll('.up-button').forEach(button => {
        button.addEventListener('click', event => {
            document.querySelector(`.content-box[data-section = '${parseInt(button.dataset.upButton) - 1}']`).scrollIntoView({
                behavior: "smooth"
            })
        })
    })

})
