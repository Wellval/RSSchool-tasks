import { Header } from './components/header/header';
import { ScoreField } from './components/score-field/score-field';
import { myStorage } from './settings';
import Page from './Page';
import _ from 'lodash';
import { UserEntry } from './models/userEntry';

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
        let users: UserEntry[] = [];
        let count = Number.parseInt(myStorage.getItem('counter') || "0");
        for (let i = 1; i <= (count < 10 ? count : 10); ++i) {
            users.push(JSON.parse(myStorage.getItem(`user${i}`)!));
        }

        users = _.sortBy(users.filter(x => !!x), ['score']).reverse();

        for (let i = 0; i < users.length; ++i) {
            this.scoreField.element.append(`${users[i].name} ${users[i]['last name']} ${users[i].email} ${users[i].score}`);
            this.scoreField.element.appendChild(document.createElement('br'));
        }

    }
}
