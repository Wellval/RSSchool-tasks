const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const resetBtn = document.querySelector('.btn-reset');
const labels = document.querySelectorAll('label');
const fullscreen = document.querySelector('.fullscreen');

function changeHandler() {
    let suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    let label = this.nextElementSibling;
    label.innerHTML = this.value;
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

inputs.forEach(input => input.addEventListener('mousemove', changeHandler));
resetBtn.addEventListener('click', reset);
fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else document.exitFullscreen();
});
