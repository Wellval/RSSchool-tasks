import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { Congratulation } from '../congratulation/congratulation';
import { SHOW_TIME } from '../../shared/constants';
import { MoveCounter } from '../move-counter/move-counter';
import { Timer } from '../timer/timer';
import { Results } from '../results/results';
import { myStorage } from '../../settings';
import { counter } from '../register-form/register-form';

export class CardsField extends BaseComponent {
    private cards: Card[] = [];

    private readonly congratulation: Congratulation;

    private readonly moveCounter: MoveCounter;

    private readonly timer: Timer;

    constructor(moveCounter: MoveCounter, timer: Timer) {
        super('div', ['cards-field']);
        this.congratulation = new Congratulation();
        this.timer = timer;
        this.moveCounter = moveCounter;
        this.clear();
        this.setFieldWidth();
    }

    clear() {
        this.cards = [];
        this.element.innerHTML = '';
    }

    async addCards(cards: Card[]) {
        this.cards = cards;
        this.cards.forEach((card) => this.element.appendChild(card.element));
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

    async congratulate() {
        if (this.cards.every((card) => !card.isFlipped)) {
            clearTimeout(this.timer.intervalId!);
            this.element.appendChild(this.congratulation.element);
            this.getScore();
        }
    }

    getScore() {
        let score = ((this.cards.length / 2) * 100 - (this.timer.time * 10));
        myStorage.setItem(`score${counter}`, score.toString());
        const results = [
            new Results(`Your time: ${this.timer.element.innerText}`).element,
            new Results(`Your moves: ${this.moveCounter.element.innerText}`).element,
            new Results(`Your score: ${score}`).element,
        ];

        for (let i = 0; i < results.length; i++) {
            this.congratulation.element.appendChild(results[i]);
        }
    }

    setFieldWidth() {
        const a = myStorage.getItem('cardsNumber');
        if (a === '4') {
            this.element.style.width = '53%';
        } else if (a === '8') {
            this.element.style.width = '95%';
        }
    }
}
