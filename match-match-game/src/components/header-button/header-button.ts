import { BaseComponent } from '../base-component';
import './header-button.scss';

export class HeaderButton extends BaseComponent {
    constructor(private readonly innerText: string) {
        super('button', ['header-button']);
        this.element.innerText = innerText;
    }
}
