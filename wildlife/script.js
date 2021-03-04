const prev = document.querySelector('.arrow__left');
const next = document.querySelector('.arrow__right');
const width = 300;
let position = 0;
let list = document.querySelector('.breaking-news__carousel-container');
let count = 2;

function swipeLeft() {
    position -= width * count;
    position = Math.min(position, 0);
    console.log(position)
    list.style.marginLeft = position + 'px';
};

function swipeRight() {
    position += width * count;
    position = Math.max(position, 0);
    console.log(position)
    list.style.marginLeft = position + 'px';
};


prev.addEventListener('click', swipeLeft);
next.addEventListener('click', swipeRight);
