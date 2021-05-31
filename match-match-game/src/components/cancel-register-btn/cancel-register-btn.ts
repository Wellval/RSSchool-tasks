import { BaseComponent } from '../base-component';
import '../submit-button/submit-button.scss';

export class CancelRegisterBtn extends BaseComponent {
    constructor() {
        super('button', ['cancel-register-btn']);
        this.element.innerText = 'Cancel';
    }
}
