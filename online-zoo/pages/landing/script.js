const checkbox = document.querySelector('body > header > div > div.switch-menu > label > input[type=checkbox]');
const whiteBack = document.querySelectorAll('.white-back');
const logo = document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(2)');
const menuItems = document.querySelectorAll('body > header > div > nav > ul > li:nth-child(n) > a');
const allP = document.querySelectorAll('p');
const howItWorks = document.querySelector('.how-it-works');
const ranges = document.querySelectorAll('.change-thumb');
const grayBack = document.querySelectorAll('.gray-back');
const h3 = document.querySelectorAll('h3');
const map = document.querySelector('.map__container');
const arrows = document.querySelectorAll('.arrow');
const burgerLines = document.querySelectorAll('.line');
const coverElem = document.getElementById('cover');
const feedbackButton = document.querySelector('.donate-btn');
let localStorage = window.localStorage;

function setDark() {
    whiteBack.forEach(back => {
        back.style.background = '#333333';
    });
    grayBack.forEach(back => {
        back.style.background = '#4f4f4f';
    });
    document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(1)').style.fill = '#fff';
    document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(2)').style.fill = '#fff';
    document.querySelector('.nav-item > a').style.color = '#fff';
    menuItems.forEach(item => {
        item.style.color = '#fff';
    });
    howItWorks.style.background = '#333';
    allP.forEach(item => {
        item.style.color = '#f2f2f2'
    });
    ranges.forEach(range => {
        range.classList.add('dark');
    });
    h3.forEach(h3 => {
        if (!h3.classList.contains('contact-us')) {
            h3.style.color = '#fefefe';
        }
    });
    map.style.backgroundImage = "url('../../assets/landing/light-map.png')";
    arrows.forEach(arrow => {
        arrow.classList.add('arrow-dark');
    });
    burgerLines.forEach(line => {
        line.style.background = '#fff';
    });
}

function setLight() {
    whiteBack.forEach(back => {
        back.style.background = '#fff';
    });
    grayBack.forEach(back => {
        back.style.background = '#f2f2f2';
    });
    allP.forEach(item => {
        if (!item.classList.contains('description')) {
            item.style.color = '#4f4f4f';
        }
    });
    document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(1)').style.fill = '#333';
    document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(2)').style.fill = '#333';
    menuItems.forEach(item => {
        item.style.color = '#333';
    });
    howItWorks.style.background = '#fff';
    ranges.forEach(range => {
        range.classList.remove('dark');
    });
    h3.forEach(h3 => {
        if (!h3.classList.contains('contact-us')) {
            h3.style.color = '#333';
        }
    });
    map.style.backgroundImage = "url('../../assets/landing/map.png')";
    arrows.forEach(arrow => {
        arrow.classList.remove('arrow-dark');
    });
    burgerLines.forEach(line => {
        line.style.background = '#333';
    });

}

function toggleTheme() {
    //black theme
    if (checkbox.checked) {
        setDark();
    } else {
        //white theme
        setLight();
    }
    localStorage.setItem(checkbox.id, checkbox.checked);
}

checkbox.checked = localStorage.getItem(checkbox.id) === "true";
if (checkbox.checked) {
    setDark();
}

checkbox.addEventListener('change', toggleTheme);
feedbackButton.addEventListener('click', () => {
    coverElem.classList.remove('hidden');
    document.body.classList.add('not-scrollable');
});

document.addEventListener('click', (e) => {
    if (!coverElem.contains(e.target) && !feedbackButton.contains(e.target)) {
        coverElem.classList.add('hidden');
        document.body.classList.remove('not-scrollable');
    }
}, )
