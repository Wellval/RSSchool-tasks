import { BaseComponent } from '../base-component';
import './header-button.scss';

export class HeaderButton extends BaseComponent {
    constructor(private readonly innerText: string) {
        super('a', ['header-button']);
        // let a = document.createElement('a');
        this.element.innerText = innerText;
        // this.element.appendChild(a);
    }
}
