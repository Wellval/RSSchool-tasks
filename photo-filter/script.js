const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const resetBtn = document.querySelector('.btn-reset');
const loadBtn = document.querySelector('.btn-load--input');
const labels = document.querySelectorAll('label');
const fullscreen = document.querySelector('.fullscreen');
const next = document.querySelector('.btn-next');
const picture = document.querySelector('.editor img')
let now = new Date();
let hour = now.getHours();
let dayTime;
let n = 1;

if ((hour >= 6) && (hour < 12)) {
    dayTime = 'morning';
} else if ((hour >= 12) && (hour < 18)) {
    dayTime = 'day';
} else if ((hour >= 18) && (hour <= 23)) {
    dayTime = 'evening';
} else dayTime = 'night';

function changeHandler() {
    let suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    labels.forEach(label => {
        for (let node of label.children) {
            if (node.matches('output') && node.parentElement == this.parentElement) {
                node.innerHTML = this.value;
            }
        }
    });
}

function reset() {
    inputs.forEach(input => {
        let suffix = input.dataset.sizing || '';
        if (input.name != 'saturate') {
            input.value = '0';
        } else input.value = '100';
        let label = input.nextElementSibling;
        label.innerHTML = input.value;
        document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
    });
}

function nextPicture() {
    console.log(n)
    if (n < 10) {
        picture.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/0${n++}.jpg`;
    } else if (n <= 20) {
        picture.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${n++}.jpg`;
    } else {
        n = 1;
        nextPicture();
    }
}

inputs.forEach(input => input.addEventListener('mousemove', changeHandler));
resetBtn.addEventListener('click', reset);
fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else document.exitFullscreen();
});
next.addEventListener('click', nextPicture);
loadBtn.addEventListener('load', () => {
    console.log(this)
})
