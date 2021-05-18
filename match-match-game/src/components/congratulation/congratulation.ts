import './congratulation.scss';
import { BaseComponent } from '../base-component';

export class Congratulation extends BaseComponent {
    constructor() {
        super('div', ['congratulation']);
        this.element.innerHTML = `<h2>You win!</h2>`;
    }
}
