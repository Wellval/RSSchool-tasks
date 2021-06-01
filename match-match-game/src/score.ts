import { Header } from './components/header/header';
import { ScoreField } from './components/score-field/score-field';
import Page from './Page';

export class ScorePage extends Page {
    private readonly header: Header;

    private readonly scoreField: ScoreField;

    public static urlPattern = 'score';

    constructor(private readonly rootElement: HTMLElement) {
        super();
        this.header = new Header();
        this.scoreField = new ScoreField();
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.scoreField.element);
    }
}
