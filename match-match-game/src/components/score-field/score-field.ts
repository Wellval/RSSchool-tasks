import { BaseComponent } from '../base-component';
import './score-field.scss';

export class ScoreField extends BaseComponent {
    constructor() {
        super('div', ['score-field']);
        this.element.innerHTML = '<h2>Best Players</h2>';
    }
}
