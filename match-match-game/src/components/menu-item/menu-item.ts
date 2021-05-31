import { BaseComponent } from '../base-component';
import './menu-item.scss';

export class MenuItem extends BaseComponent {
    constructor(private readonly child: HTMLElement) {
        super('li', ['menu-item']);
        this.child = child;
        this.element.appendChild(this.child);
    }
}
