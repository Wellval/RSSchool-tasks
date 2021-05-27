import './card.scss';
import { BaseComponent } from '../base-component';
import { CardOverlay } from '../card-overlay/card-overlay';
import { delay } from '../../shared/delay';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
    isFlipped = false;

    private readonly cardOverlay: CardOverlay;

    constructor(readonly image: string) {
        super('div', ['card-container']);
        this.cardOverlay = new CardOverlay();
        this.element.innerHTML = `
        <div class="card">
            <div class="card__front" style="background-image: url('./images/${image}')"></div>
            <div class="card__back"></div>
        </div>
        `;
    }

    flipToBack() {
        this.isFlipped = true;
        return this.flip(true);
    }

    flipToFront() {
        this.isFlipped = false;
        return this.flip(false);
    }

    async rightChoiceState() {
        this.cardOverlay.element.style.backgroundColor = 'green';
        this.element.appendChild(this.cardOverlay.element);
    }

    async wrongChoiceState() {
        this.cardOverlay.element.style.backgroundColor = 'red';
        this.element.appendChild(this.cardOverlay.element);
        await delay(1000);
        this.element.removeChild(this.cardOverlay.element);
    }

    private flip(isFront = false): Promise<void> {
        return new Promise((resolve) => {
            this.element.classList.toggle(FLIP_CLASS, isFront);
            this.element.addEventListener('transitionend', () => resolve(), {
                once: true,
            });
        });
    }
}
