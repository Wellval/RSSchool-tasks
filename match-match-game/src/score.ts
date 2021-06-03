import { Header } from './components/header/header';
import { ScoreField } from './components/score-field/score-field';
import { myStorage } from './settings';
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
        this.handleScore();
    }

    handleScore() {
        for (let i = 1; i < 10; i++) {
            let c = myStorage.getItem('counter')?.toString();
            if ((myStorage.getItem(`name${i}`) as string && myStorage.getItem(`score${i}`))) {
                this.scoreField.element.append(myStorage.getItem(`name${i}`) as string + ' ');
                this.scoreField.element.append(myStorage.getItem(`last name${i}`) as string + ' ');
                this.scoreField.element.append(myStorage.getItem(`email${i}`) as string + ' ');
                this.scoreField.element.append(myStorage.getItem(`score${i}`) as string + ' ');
                this.scoreField.element.appendChild(document.createElement('br'));
            }
        }
    }
}
