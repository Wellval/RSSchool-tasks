class SliderCarousel {
    constructor({ main,
        wrap,
        next,
        prev,
        position = 0,
        infinity = false,
        range,
        rangeLabel,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.position = position;
        this.options = {
            position,
            infinity,
        };
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.range = document.querySelector(range);
        this.rangeLabel = document.querySelector(rangeLabel);
    };

    init() {
        this.controlSlider();
    };

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
        this.range.addEventListener('input', this.changeHandler.bind(this))
    };

    // TO-DO: make range from 8 to 1 work correct
    changeHandler() {
        this.options.position = this.range.value;
        document.querySelector('#pets-range__label').innerHTML = `0${this.options.position}/`;
        let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position})`);
        document.querySelectorAll('.pets__carousel__wrapper > div > div:nth-child(n)').forEach(el => {
            el.classList.remove('active');
        });
        activeEl.classList.add('active');
        if (this.options.position > 4) {
            this.wrap.style.transform = `translateX(-${(this.options.position - 4) * 25}%)`; 
        }
        if (this.options.position < 5) {
            this.wrap.style.transform = `translateX(-${(this.options.position - 4) * 25}%)`; 
        }

        console.log(this.range.value)
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            this.range.value = this.options.position + 1;
            this.rangeLabel.innerHTML = `0${this.options.position + 1}/`;
            if (this.options.position < this.slides.length - 4) {
                this.wrap.style.transform = `translateX(-${(this.options.position) * 25}%)`;
                if (this.options.position < this.slides.length - this.slides.length) {
                    this.options.position = this.slides.length - 1;
                    this.range.value = this.options.position + 1;
                    this.rangeLabel.innerHTML = `0${this.options.position + 1}/`;
                    this.wrap.style.transform = `translateX(-${(this.options.position - 3) * 25}%)`;
                    let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position + 2})`);
                }
            }
            //this.wrap.style.transform = `translateX(-${(this.options.position - 3) * 25}%)`;
            let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position + 1})`);
            document.querySelectorAll('.pets__carousel__wrapper > div > div:nth-child(n)').forEach(el => {
                el.classList.remove('active');
            });
            activeEl.classList.add('active');
        } 
    };

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length) {
            ++this.options.position;
            this.range.value = this.options.position + 1;
            this.rangeLabel.innerHTML = `0${this.options.position + 1}/`;
            if (this.options.position > this.slides.length - 5) {
                let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position + 1})`);
                this.wrap.style.transform = `translateX(-${(this.options.position - 3) * 25}%)`;
                if (this.options.position > this.slides.length - 1) {
                    this.options.position = 0;
                    this.range.value = this.options.position + 1;
                    this.rangeLabel.innerHTML = `0${this.options.position + 1}/`;
                    this.wrap.style.transform = `translateX(0px)`;
                    let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position + 2})`);
                } 
            } 
            let activeEl = document.querySelector(`.pets__carousel__wrapper > div > div:nth-child(${this.options.position + 1})`);
            document.querySelectorAll('.pets__carousel__wrapper > div > div:nth-child(n)').forEach(el => {
                el.classList.remove('active');
            })
            activeEl.classList.add('active');
        }
    }
}

const options = {
    main: '.pets__carousel',
    wrap: '.pets__carousel__items',
    prev: '.pets__carousel > .arrow-left',
    next: '.pets__carousel > .arrow-right',
    infinity: true,
    range: '#pets-range',
    rangeLabel: '#pets-range__label',
}

// const options = {
//     main: '.how-it-works__container',
//     wrap: '.how-it-works__carousel-wrapper',
//     infinity: true,
// }

let carousel = new SliderCarousel(options);

carousel.init();

