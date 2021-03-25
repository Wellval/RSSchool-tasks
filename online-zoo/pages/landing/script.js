let carouselItems = document.querySelectorAll('.carousel-animal');

function makeActive() {
    this.style.transform = 'scale(1.75)';

}

carouselItems.forEach(item => {
    item.addEventListener('click', makeActive);
})