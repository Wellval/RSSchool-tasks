import { Header } from './components/header/header';
import { ScoreField } from './components/score-field/score-field';

export class ScorePage {
    private readonly header: Header;

    private readonly scoreField: ScoreField;

    constructor(private readonly rootElement: HTMLElement) {
        this.header = new Header();
        this.scoreField = new ScoreField();
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.scoreField.element);
    }
}
