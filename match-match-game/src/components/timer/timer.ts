import { BaseComponent } from '../base-component';
import './timer.scss';
import { SHOW_TIME } from '../../shared/constants';

export class Timer extends BaseComponent {
    constructor(public time = 0) {
        super('div', ['timer']);
        this.element.innerHTML = '00:00:00';
    }

    intervalId: NodeJS.Timeout | undefined = undefined;

    setTimer() {
        setTimeout(() => {
            this.intervalId = setInterval(() => {
                this.countTime();
            }, 1000);
        }, 1000 * SHOW_TIME);
    }

    countTime() {
        this.time++;
        const seconds = this.time % 60;
        const minutes = Math.floor(this.time / 60);
        const hours = Math.floor(this.time / 3600);
        this.element.innerText = `${(hours < 10) ? `0${hours}` : hours}:${(minutes < 10) ? `0${minutes}` : minutes}:${(seconds < 10) ? `0${seconds}` : seconds}`;
    }
}
