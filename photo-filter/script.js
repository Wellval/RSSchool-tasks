const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const resetBtn = document.querySelector('.btn-reset');
const loadBtn = document.querySelector('.btn-load--input');
const labels = document.querySelectorAll('label');
const fullscreen = document.querySelector('.fullscreen');
const next = document.querySelector('.btn-next');
const saveBtn = document.querySelector('.btn-save');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let imgContainer = document.querySelector('.img-container');
let fileInput = document.querySelector('input[type="file"]');
let now = new Date();
let hour = now.getHours();
let dayTime;
let n = 1;
let filters = {};
let image = new Image();
image.onload = renderCanvas;
image.src = "assets/img/img.jpg";
window.onresize = renderCanvas.bind(image)

if ((hour >= 6) && (hour < 12)) {
    dayTime = 'morning';
} else if ((hour >= 12) && (hour < 18)) {
    dayTime = 'day';
} else if ((hour >= 18) && (hour <= 23)) {
    dayTime = 'evening';
} else dayTime = 'night';

function renderCanvas() {
    let box = [0, 0, canvas.clientWidth, canvas.clientHeight];
    ctx.filter = Object.keys(filters).map(name => `${name}(${filters[name]})`).join(' ');
    ctx.drawImage(this, ...box);
}

function changeHandler() {
    let suffix = this.dataset.sizing || '';

    filters[this.name] = this.value + suffix;
    renderCanvas.call(image);

    // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    labels.forEach(label => {
        for (let node of label.children) {
            if (node.matches('input') && node.parentElement == this.parentElement) {
                node.setAttribute('value', Number.parseInt(this.value))
            }
            if (node.matches('output') && node.parentElement == this.parentElement) {
                node.innerHTML = this.value;
            }
        }
    });
}

function reset() {
    let keys = Object.keys(filters);
    for (let key of keys) {
        const input = Array.from(inputs.values()).find(x => x.name === key);
        const newValue = key !== 'saturate' ? '0' : '100%';
        filters[key] = newValue;
        const numValue = Number.parseInt(newValue);
        input.nextElementSibling.innerHTML = numValue;
        input.value = numValue;
    }
    renderCanvas.call(image);
}

function nextImage() {
    console.log(n)
    if (n < 10) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/0${n++}.jpg`;
    } else if (n <= 20) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${n++}.jpg`;
    } else {
        n = 1;
        nextPicture();
    }
}

function loadImage(e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = () => {
        image.src = reader.result;
    }
    reader.readAsDataURL(file);
}

function saveImage() {
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = image;
}

inputs.forEach(input => input.addEventListener('input', changeHandler));
resetBtn.addEventListener('click', reset);
fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else document.exitFullscreen();
});
next.addEventListener('click', nextImage);
fileInput.addEventListener('change', loadImage);
saveBtn.addEventListener('click', saveImage);

