import './game.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Header } from '../header/header';
import { MoveCounter } from '../move-counter/move-counter';
import { Timer } from '../timer/timer';
import _ from 'lodash';
export class Game extends BaseComponent {
    private readonly cardsField: CardsField;

    private activeCard?: Card;

    private isAnimation = false;

    private readonly header: Header;

    isStarted = false;

    constructor(moveCounter: MoveCounter, timer: Timer) {
        super('div', ['game']);
        this.header = new Header();
        this.cardsField = new CardsField(moveCounter, timer);
        this.element.appendChild(this.cardsField.element);
    }

    newGame(images: string[]) {
        this.cardsField.clear();
        const cards = images
            .concat(images)
            .map((url) => new Card(url))
            .sort(() => Math.random() - 0.5);

        cards.forEach((card) => {
            card.element.addEventListener('click', () => this.cardHandler(card));
        });
        this.cardsField.addCards(cards);
        this.isStarted = true;
    }

    private async cardHandler(card: Card) {
        if (this.isAnimation) return;
        if (!card.isFlipped) return;
        this.isAnimation = true;

        await card.flipToFront();
        if (!this.activeCard) {
            this.activeCard = card;
            this.isAnimation = false;
            return;
        }

        if (this.activeCard.image !== card.image) {
            await Promise.all([this.activeCard.wrongChoiceState(), card.wrongChoiceState()]);
            await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
        } else {
            this.activeCard.rightChoiceState();
            card.rightChoiceState();
        }

        this.activeCard = undefined;
        this.isAnimation = false;

        await this.cardsField.congratulate();
    }
}
