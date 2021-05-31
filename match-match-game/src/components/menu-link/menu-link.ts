import { BaseComponent } from '../base-component';
import './menu-link.scss';

export class MenuLink extends BaseComponent {
    constructor(private readonly innerHTML: string) {
        super('a', ['menu-link']);
        (this.element as HTMLAnchorElement).href = '#';
        this.element.innerHTML = this.innerHTML;
    }
}
