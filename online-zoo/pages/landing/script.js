let carouselItems = document.querySelectorAll('.carousel-animal');

function makeActive() {
    if (this.classList.contains('carousel-animal-active')) return;
    else {
        this.style.transform = 'scale(1.75)';
    }

}

carouselItems.forEach(item => {
    item.addEventListener('click', makeActive);
})