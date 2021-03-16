const keys = document.querySelectorAll('.piano-key');
const notesBtn = document.querySelector('.btn-notes');
const lettersBtn = document.querySelector('.btn-letters');
const btns = document.querySelectorAll('.btn');
const screenButton = document.querySelector('.fullscreen');
let isDown = false;

//play function for click and mousemove when mousedown event
function play(e) {
    if (!isDown && e.type == 'mousemove') return;
    let note = event.target.dataset.note;
    let audio = new Audio(`./assets/audio/${note}.mp3`);
    audio.play();
    e.target.classList.add('piano-key-active');
    if (e.target.classList.contains('main')) {
        audio.pause();
    }
}

let notesActive = true;
let lettersActive = false;

//functions to toggle letters and notes
function activeNotes(e) {
    this.classList.add('btn-active');
    lettersBtn.classList.remove('btn-active');
    notesActive = true;
    lettersActive = false;
    keys.forEach(key => key.classList.remove('no-pseudo'));
    keys.forEach(key => key.classList.remove('letters'));

}

function activeLetters(e) {
    this.classList.add('btn-active');
    notesBtn.classList.remove('btn-active');
    notesActive = false;
    lettersActive = true;
    keys.forEach(key => key.classList.add('no-pseudo'));
    keys.forEach(key => key.classList.add('letters'));
}

//play function for keydown event
window.addEventListener('keydown', (e) => {
    let code = e.code;
    let keyLetter = code[code.length - 1];
    let key = (document.querySelector(`.piano-key[data-letter="${keyLetter}"]`));
    if (!key) return;
    let note = key.dataset.note;
    let audio = new Audio(`./assets/audio/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');
});

window.addEventListener('keyup', (e) => {
    keys.forEach(key => key.classList.remove('piano-key-active'));
})

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    keys.forEach(key => key.classList.remove('piano-key-active'));
}

keys.forEach(key => key.addEventListener('click', play));
keys.forEach(key => key.addEventListener('mousedown', (e) => {
    isDown = true;
}));
document.addEventListener('mouseup', (e) => {
    isDown = false;
    keys.forEach(key => key.classList.remove('piano-key-active'));
});
window.addEventListener('mousemove', play);
notesBtn.addEventListener('click', activeNotes);
lettersBtn.addEventListener('click', activeLetters);
window.addEventListener('transitionend', removeTransition);
screenButton.addEventListener('click', (e) => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
}
})
