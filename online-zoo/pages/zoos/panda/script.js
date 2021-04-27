const checkbox = document.querySelector('body > header > div > div.switch-menu > label > input[type=checkbox]');
const whiteBack = document.querySelectorAll('.white-back');
const allP = document.querySelectorAll('p');
const grayBack = document.querySelectorAll('.gray-back');
const h3 = document.querySelectorAll('h3');
const logo = document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(1)');
const logo2 = document.querySelector('body > header > div > div.logo > a > svg > path:nth-child(2)');
const menuItems = document.querySelectorAll("body > header > div > nav > ul > li:nth-child(n) > a");
//const burgerLines = document.querySelectorAll('.line');
let localStorage = window.localStorage;

function setDark() {
    whiteBack.forEach(back => {
        back.style.background = '#333333';
    });
    grayBack.forEach(back => {
        back.style.background = '#4f4f4f';
    });
    allP.forEach(item => {
        item.style.color = '#f2f2f2'
    });
    h3.forEach(h3 => {
        if (!h3.classList.contains('contact-us')) {
            h3.style.color = '#fefefe';
        }
    });
    logo.style.fill = '#fff'
    logo2.style.fill = '#fff'
    menuItems.forEach(item => {
        item.style.color = '#fff'
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
    h3.forEach(h3 => {
        if (!h3.classList.contains('contact-us')) {
            h3.style.color = '#333';
        }
    });
    logo.style.fill = '#333'
    logo2.style.fill = '#333'
    menuItems.forEach(item => {
        item.style.color = '#333'
    })
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



