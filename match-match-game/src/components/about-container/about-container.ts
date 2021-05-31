import './about-container.scss';
import { BaseComponent } from '../base-component';
import { GameStep } from '../game-step/game-step';

export class AboutContainer extends BaseComponent {
    private readonly gameStepOne: GameStep;

    private readonly gameStepTwo: GameStep;

    private readonly gameStepThree: GameStep;

    constructor() {
        super('div', ['about-container']);
        this.gameStepOne = new GameStep();
        this.gameStepTwo = new GameStep();
        this.gameStepThree = new GameStep();
        this.createSteps();
    }

    createSteps() {
        this.gameStepOne.element.innerHTML = '<i class="fas fa-check"></i> Register';
        this.gameStepTwo.element.innerHTML = '<i class="fas fa-check"></i> Configure Game Settings';
        this.gameStepThree.element.innerHTML = '<i class="fas fa-check"></i> Start you new game!';

        this.element.appendChild(this.gameStepOne.element);
        this.element.appendChild(this.gameStepTwo.element);
        this.element.appendChild(this.gameStepThree.element);
    }
}
