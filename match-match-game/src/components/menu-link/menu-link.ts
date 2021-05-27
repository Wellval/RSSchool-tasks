import { BaseComponent } from '../base-component';
import './menu-link.scss';

export class MenuLink extends BaseComponent {
    constructor() {
        super('a', ['menu-link']);
    }
}
