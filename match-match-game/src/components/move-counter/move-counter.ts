import './move-counter.scss';
import { BaseComponent } from '../base-component';

export class MoveCounter extends BaseComponent {
    public movesMade;

    private cardsClicked;

    constructor() {
        super('div', ['move-counter']);
        this.cardsClicked = 0;
        this.movesMade = 0;
        this.element.innerText = `${this.movesMade}`;
    }

    countMoves() {
        this.cardsClicked++;
        if (this.cardsClicked % 2 === 0) {
            this.movesMade++;
        }
        this.element.innerText = `${this.movesMade}`;
    }
}
