import { BaseComponent } from '../base-component';
import './header.scss';
import { Navigation } from '../navigation/navigation';
import { HeaderButton } from '../header-button/header-button';

export class Header extends BaseComponent {
    private nav: Navigation;

    constructor() {
        super('header', ['header']);
        this.nav = new Navigation();
        this.addLogo();
    }

    addLogo() {
        const logo = document.createElement('img');
        logo.src = 'card-game.svg';
        logo.classList.add('logo');
        this.element.appendChild(logo);
        this.element.appendChild(this.nav.element);
    }
}
