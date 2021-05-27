import { BaseComponent } from '../components/base-component';
import './timer.scss';
import { SHOW_TIME } from '../shared/constants';

export class Timer extends BaseComponent {
    constructor(public seconds = 0, public minutes = 0, public hours = 0) {
        super('div', ['timer']);
        this.element.innerHTML = '00:00:00';
        const intervalId = setInterval(() => {
            this.countTime();
        }, 1000);
    }

    countTime() {
        setTimeout(() => {
            this.seconds++;
            if (this.seconds === 60) {
                this.minutes++;
                this.seconds = 0;
            }
            if (this.minutes === 60) {
                this.hours++;
                this.minutes = 0;
            }
            if (this.hours < 10 && this.minutes < 10 && this.seconds < 10) {
                this.element.innerHTML = `0${this.hours}:0${this.minutes}:0${this.seconds}`;
            } else if (this.hours < 10 && this.minutes < 10) {
                this.element.innerHTML = `0${this.hours}:0${this.minutes}:${this.seconds}`;
            } else if (this.hours < 10) {
                this.element.innerHTML = `0${this.hours}:${this.minutes}:${this.seconds}`;
            } else if (this.hours >= 10) {
                if (this.seconds >= 10 && this.minutes >= 10) {
                    this.element.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
                } else if (this.seconds <= 10 && this.minutes >= 10) {
                    this.element.innerHTML = `${this.hours}:${this.minutes}:0${this.seconds}`;
                } else if (this.seconds >= 10) {
                    this.element.innerHTML = `${this.hours}:0${this.minutes}:${this.seconds}`;
                } else if (this.minutes < 10) {
                    this.element.innerHTML = `${this.hours}:0${this.minutes}:0${this.seconds}`;
                } else this.element.innerHTML = `${this.hours}:${this.minutes}:0${this.seconds}`;
            }
        }, SHOW_TIME * 1000);
    }
}
