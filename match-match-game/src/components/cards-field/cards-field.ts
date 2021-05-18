import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { Congratulation } from '../congratulation/congratulation'

const SHOW_TIME = 3;

export class CardsField extends BaseComponent {
    private cards: Card[] = [];
    private readonly congratulation: Congratulation;

    constructor() {
        super('div', ['cards-field']);
        this.congratulation = new Congratulation();
    }

    clear() {
        this.cards = [];
        this.element.innerHTML = ``;
    }

    addCards(cards: Card[]) {
        this.cards = cards;
        this.cards.forEach(card => this.element.appendChild(card.element));
        setTimeout(() => {
            this.cards.forEach(card => {
                card.flipToBack();
            });
        }, SHOW_TIME * 1000);
    }

    congratulate() {
        if (this.cards.every(card => !card.isFlipped)) {
            this.element.appendChild(this.congratulation.element);
        } 
    }
}