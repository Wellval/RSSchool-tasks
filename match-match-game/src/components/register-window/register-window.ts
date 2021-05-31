import { BaseComponent } from '../base-component';
import { RegisterForm } from '../register-form/register-form';
import './register-window.scss';

export class RegisterWindow extends BaseComponent {
    private readonly registerForm: RegisterForm;

    constructor() {
        super('div', ['register-window']);
        this.registerForm = new RegisterForm();
        this.element.innerHTML = '<h2>Register new player</h2>';
        this.element.appendChild(this.registerForm.element);
    }
}
