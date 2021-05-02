class sliderClicker {
    constructor({
        main,
        wrap,
        items,
        position = 2,
        rangeLabel,
        range,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.items = document.querySelectorAll(items);
        this.position = position;
        this.rangeLabel = document.querySelector(rangeLabel);
        this.range = document.querySelector(range);
    };

    init() {
        this.controlSlider();
    };

    controlSlider() {
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                this.items.forEach(item => {
                    item.parentElement.classList.add('carousel__container-animal');
                    item.parentElement.classList.remove('carousel__container-animal-active');
                })
                let arr = [];
                for(item in this.items){
                    arr.push(this.items[item]);
                }
                let parent = e.target.parentElement;
                if (this.position > (arr.indexOf(e.target)) && arr.indexOf(e.target) !== 0) {
                    this.main.style.transform = `translateX(-${(arr.indexOf(e.target) - 1) * 19}rem)`;
                } 
                else if (arr.indexOf(e.target) === 0) {
                    this.main.style.transform = `translateX(19rem)`;
                }
                else {
                    this.main.style.transform = `translateX(-${(arr.indexOf(e.target) - 1) * 19}rem)`;
                }
                this.position = arr.indexOf(e.target)
                this.rangeLabel.innerHTML = `0${this.position + 1}/`;
                parent.classList.add('carousel__container-animal-active');
            })
        });
        this.range.addEventListener('input', this.changeHandler.bind(this))
    }

    changeHandler(e) {
        this.position = this.range.value;
        this.rangeLabel.innerHTML = `0${this.position}/`
        this.items.forEach(item => {
            item.parentElement.classList.remove('carousel__container-animal-active');
            item.parentElement.classList.add('carousel__container-animal');
        });
        let arr = [];
        for(let item in this.items){
            arr.push(this.items[item]);
        }
        if (this.position > -1) {
            if (this.position - 1 === 0) {
                this.main.style.transform = `translateX(19rem)`;   
                console.log('aaa')
            } else {
                this.main.style.transform = `translateX(-${(this.position - 2) * 19}rem)`;
                console.log(this.position);
            }
        }
        else {
            console.log(33)
            this.main.style.transform = `translateX(${(this.position + 2) * 19}rem)`;
        }
        let parent = arr[this.position - 1].parentElement;
        parent.classList.add('carousel__container-animal-active')
    }
}

const slOptions = {
    main: '.carousel__container',
    wrap: '.carousel__wrapper',
    items: '.animal-item',
    rangeLabel: '#carousel-range-label',
    range: '#carousel-range',
}

let favAnimalSlider = new sliderClicker(slOptions);
favAnimalSlider.init();