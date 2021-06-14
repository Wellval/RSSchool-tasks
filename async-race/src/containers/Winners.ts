import { Headline } from '../components/headline';
import { NavBar } from '../components/navbar';
import Page from './Page';

export class WinnersPage extends Page {
    public static urlPattern = 'winners';

    private readonly navBar: NavBar;

    constructor(public rootElement: HTMLElement) {        
        super();
        this.navBar = new NavBar();
        this.appendComponents();
    }

    appendComponents() {
        this.rootElement.appendChild(this.navBar.element);
    }
}