import { BaseComponent } from '../base-component';
import './menu-item.scss';

export class MenuItem extends BaseComponent {
    constructor() {
        super('li', ['menu-item']);
    }
}
