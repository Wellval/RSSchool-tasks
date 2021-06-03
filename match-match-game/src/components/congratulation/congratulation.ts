import './congratulation.scss';
import { BaseComponent } from '../base-component';
import { HeaderButton } from '../header-button/header-button';
import { Router } from '../../routing';

export class Congratulation extends BaseComponent {
    private readonly okButton: HeaderButton;

    private readonly router: Router;

    constructor() {
        super('div', ['congratulation']);
        this.element.innerHTML = '<h2>You win!</h2>';
        this.router = new Router();
        this.okButton = new HeaderButton('OK');
        this.element.appendChild(this.okButton.element);
        this.okButton.element.addEventListener('click', () => {
            (this.okButton.element as HTMLAnchorElement).href = '#';
            this.router.navigateTo('score');
        });
    }
}
