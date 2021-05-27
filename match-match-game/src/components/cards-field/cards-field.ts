import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { Congratulation } from '../congratulation/congratulation';
import { SHOW_TIME } from '../../shared/constants';
import { MoveCounter } from '../move-counter/move-counter';

export class CardsField extends BaseComponent {
    private cards: Card[] = [];

    private readonly congratulation: Congratulation;

    private readonly moveCounter: MoveCounter;

    constructor(moveCounter: MoveCounter) {
        super('div', ['cards-field']);
        this.congratulation = new Congratulation();
        this.moveCounter = moveCounter;
        this.clear();
    }

    clear() {
        this.cards = [];
        this.element.innerHTML = '';
    }

    async addCards(cards: Card[]) {
        this.cards = cards;
        this.cards.forEach((card) => {
            this.element.appendChild(card.element);
        });
        setTimeout(() => {
            this.cards.forEach((card) => {
                card.element.addEventListener('click', (e) => {
                    if ((e.target as Element).classList.contains('card__back')) {
                        this.moveCounter.countMoves();
                    }
                });
                card.flipToBack();
            });
        }, SHOW_TIME * 1000);
    }

    congratulate() {
        if (this.cards.every((card) => !card.isFlipped)) {
            this.element.appendChild(this.congratulation.element);
        }
    }
}
