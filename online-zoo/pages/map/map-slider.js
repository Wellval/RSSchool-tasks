class MapSlider {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 1,
        range,
        rangeLabel,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelector(wrap).children;
        this.position = position;
        this.range = document.querySelector(range);
        this.rangeLabel = document.querySelector(rangeLabel);
    };

    init() {
        this.controlSlider();
    };

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
        this.range.addEventListener('input', this.changeHandler.bind(this));
    };

    prevSlider() {
        let prevPosition = this.position;
        if (this.wrap.offsetWidth > 700 && this.position === 0) {
            this.position = this.slides.length - 1;
            this.wrap.style.transform = `translateX(0px)`;
            console.log('hahaha')
        }
        else if (this.infinity || this.position > 0) {
            --this.position;
            if  (this.position < 3 && this.wrap.offsetWidth < 700) {
                if (this.position < 1 && prevPosition !== this.position + 1) {
                    this.wrap.style.transform = `translateX(-${(this.position - 3)  * 128}px)`;
                }
                else if (this.position < 3 && prevPosition === this.position + 1) {
                    this.wrap.style.transform = `translateX(-${(this.position)  * 128}px)`;
                }
                else if (this.position === 0) {
                    console.log('jjj')
                    this.wrap.style.transform = `translateX(-${(this.position)  * 128}px)`;
                }
            } 
        } 
        else if (this.wrap.offsetWidth < 700 && this.position < this.slides.length - 4) {
            if (this.position === 0) {
                this.position = this.slides.length - 1;
                this.wrap.style.transform = `translateX(-${(this.position - 4)  * 128}px)`;
            }
        }
        console.log(this.position)
        let activeEl = document.querySelector(`.carousel__container > ul > li:nth-child(${this.position + 1})`);
        activeEl.classList.add('animal-active');
        document.querySelectorAll(`.carousel__container > ul > li:nth-child(n)`).forEach(el => {
                el.classList.remove('animal-active');
        });
        this.range.value = this.position + 1;
        this.rangeLabel.innerHTML = `0${this.range.value}/`;
        activeEl.classList.add('animal-active');
        if (activeEl.classList.contains('gorilla')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-gorilla').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-gorilla').style.display = 'flex';
        }  else if (activeEl.classList.contains('panda')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-panda').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-panda').style.display = 'flex';
        }  else if (activeEl.classList.contains('eagle')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-eagle').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-eagle').style.display = 'flex';
        }  else if (activeEl.classList.contains('crocodile')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-crocodile').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-crocodile').style.display = 'flex';
        } else {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
        }
    }

    nextSlider() {
        let prevPosition = this.position;
        if (this.infinity || this.position < this.slides.length - 1) {
            ++this.position;
        } else {
            this.position = 0;
            this.wrap.style.transform = `translateX(0px)`;
        }
        if (this.wrap.offsetWidth < 700 && this.position > 4) {
            this.wrap.style.transform = `translateX(-${(this.position - 4)  * 128}px)`;
        }
        let activeEl = document.querySelector(`.carousel__container > ul > li:nth-child(${this.position + 1})`);
        activeEl.classList.add('animal-active');
        document.querySelectorAll(`.carousel__container > ul > li:nth-child(n)`).forEach(el => {
                el.classList.remove('animal-active');
        })
        this.range.value = this.position + 1;
        this.rangeLabel.innerHTML = `0${this.range.value}/`;
        activeEl.classList.add('animal-active');
        if (activeEl.classList.contains('gorilla')) {
            document.querySelector("body > main > div.map > div > div > div.map-eagle.map-animal").style.backgroundImage = "url('../../assets/landing/test2.png')";
        }
        if (activeEl.classList.contains('gorilla')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-gorilla').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-gorilla').style.display = 'flex';
        }  else if (activeEl.classList.contains('panda')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-panda').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-panda').style.display = 'flex';
        }  else if (activeEl.classList.contains('eagle')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-eagle').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-eagle').style.display = 'flex';
        }  else if (activeEl.classList.contains('crocodile')) {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
            document.querySelector('.map-crocodile').style.backgroundImage = "url('../../assets/landing/test2.png')";
            document.querySelector('#popup-crocodile').style.display = 'flex';
        } else {
            document.querySelectorAll('.map-animal').forEach(item => {
                item.style.backgroundImage = "url('../../assets/landing/test.png')";
            })
            document.querySelectorAll('.popup').forEach(item => {
            item.style.display = 'none';
            });
        }
    }

    changeHandler() {
        let prevPosition = this.position;
        this.position = this.range.value;
        
        if (prevPosition < this.position) {
            if  (this.position > 5 && this.wrap.offsetWidth < 700) {
                this.wrap.style.transform = `translateX(-${(this.position - 5)  * 128}px)`;
            } 
        } 
        else {
            if (this.position < 4) {
                this.wrap.style.transform = `translateX(-${(this.position - 1)  * 128}px)`;
            }
        }
        let activeEl = document.querySelector(`.carousel__container > ul > li:nth-child(${this.position})`);
        document.querySelectorAll(`.carousel__container > ul > li:nth-child(n)`).forEach(el => {
            el.classList.remove('animal-active');
        });
        activeEl.classList.add('animal-active');
        this.rangeLabel.innerHTML = `0${this.position}/`
    }
}

const options = {
    main: '.carousel__container',
    wrap: '.carousel__container > ul',
    next: '.arrow-right',
    prev: '.arrow-left',
    infinity: true,
    range: '#carousel-range',
    rangeLabel: '#carousel-range-label'
}

let mapSlider = new MapSlider(options);

mapSlider.init()