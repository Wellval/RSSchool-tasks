import { BaseComponent } from '../base-component';
import './submit-button.scss';

export class SubmitButton extends BaseComponent {
    constructor() {
        super('button', ['submit-button']);
        // this.element.setAttribute('type', 'submit');
        this.element.innerText = 'Add User';
        this.element.setAttribute('disabled', 'disabled');
    }
}
