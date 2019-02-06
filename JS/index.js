// content box contructor class
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
        this.content.appendChild(this.textContent);
        this.imageContent = document.createElement('img');
        this.imageContent.src = this.contentSection["image source"];
        this.content.appendChild(this.imageContent);

        // event listeners
        window.addEventListener('load', () => this.implement());
    }

    // box builder
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
    {"content box": 1, "text content": "The worlds most accessible open educational resource", "image source": "/Images/bookstack.jpg"},
    {"content box": 2, "text content": "Access on your desktop tablet or mobile", "image source": "/Images/bookstack.jpg"},
    {"content box": 3, "text content": "Study, grow, and learn In the world's largest digital library", "image source": "/Images/bookstack.jpg"}
];

contentArray.forEach(content => new ContentBox(content));


// random quote generator
let quotes = [
    {"index": 1,"author": "-Thomas Jefferson", "quote": "\"The glow of one warm thought is to me worth more than money.\""},
    {"index": 2,"author": "-E. E. Cummings", "quote": "\"Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.\""},
    {"index": 3,"author": "-Joyce Meyer", "quote": "\"A No. 2 pencil and a dream can take you anywhere.\""},
    {"index": 4,"author": "-Wilma Rudolph", "quote": "\"When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.\""},
    {"index": 5,"author": "-Nathaniel Hawthorne", "quote": "\"Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.\""},
    {"index": 6,"author": "-Andrew Hendrixson", "quote": "\"Anyone who has ever made anything of importance was disciplined.\""},
    {"index": 7,"author": "-Henry David Thoreau", "quote": "\"What you get by achieving your goals is not as important as what you become by achieving your goals.\""},
    {"index": 8,"author": "-Author Unknown", "quote": "\"If the plan doesn’t work, change the plan, but never the goal.\""},
    {"index": 9,"author": "-Neil Barringham", "quote": "\"The grass is greener where you water it.\""},
    {"index": 10,"author": "-Yoda", "quote": "\"Do or do not. There is no try.\""}
];

window.addEventListener('load', event => {
    let randomIndex = (Math.ceil(Math.random() * 10));
    let randomQuote = quotes.filter(quote => quote["index"] == randomIndex);
    document.querySelector('.quote').textContent = randomQuote[0]["quote"];
    document.querySelector('.author').textContent = randomQuote[0]["author"];
})


// scrolly func
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


