import { CarRoute } from '../components/cars/route';
import { Headline } from '../components/headline';
import { NavBar } from '../components/navbar';
import { Garage } from '../models/Garage';
import { Winners } from '../models/Winners';
import { Wrapper } from '../components/wrapper';
import Page from './Page';

export class WinnersPage extends Page {
    public static urlPattern = 'winners';

    private winners = new Winners();

    private readonly navBar: NavBar;

    private readonly wrapper = new Wrapper();

    constructor(public rootElement: HTMLElement) {        
        super();
        this.navBar = new NavBar();
        this.appendComponents();
    }

    appendComponents() {
        this.rootElement.appendChild(this.navBar.element);
        localStorage.setItem('winners page number', (this.winners.page).toString());
        this.rootElement.appendChild(this.wrapper.element);
        this.wrapper.element.append(new Headline(`Page #${this.winners.page}`).element);
    }

    test() {
        //this.winners.create()
    }
}