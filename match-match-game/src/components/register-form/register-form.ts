import './register-form.scss';
import { BaseComponent } from '../base-component';
import { RegisterInput, Validator } from '../register-input/register-input';
import { SubmitButton } from '../submit-button/submit-button';
import { CancelRegisterBtn } from '../cancel-register-btn/cancel-register-btn';
import { Router } from '../../routing';

const ValidateText: Validator = (value: string) => {
    const regexp = new RegExp('^[a-zA-Zа-яА-Я]+$');
    if (regexp.test(value as string) && (value as string).length <= 30) {
        return true;
    }
    return false;
};

const ValidateEmail: Validator = (value: string) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(value as string) && (value as string).length <= 30) {
        return true;
    }
    return false;
};

export class RegisterForm extends BaseComponent {
    private readonly submitButton: SubmitButton;

    private readonly cancelRegisterBtn: CancelRegisterBtn;

    private readonly router: Router;

    constructor() {
        super('form', ['register-form']);
        this.router = new Router();
        const registerInputs: RegisterInput[] = [];
        this.submitButton = new SubmitButton();
        this.cancelRegisterBtn = new CancelRegisterBtn();

        const callback = () => {
            registerInputs.forEach((input) => {
                if (input.lastValid) {
                    if ((input.element as HTMLInputElement).value !== '') {
                        input.element.style.backgroundColor = 'rgba(185, 205, 137, 50%)';
                    } else {
                        input.element.style.backgroundColor = 'white';
                    }
                } else {
                    if ((input.element as HTMLInputElement).value !== '') {
                        input.element.style.backgroundColor = 'rgba(236, 162, 154, 50%)';
                        return;
                    }
                    input.element.style.backgroundColor = 'white';
                }
            });
            if (registerInputs.every((input) => input.lastValid)) {
                this.submitButton.element.removeAttribute('disabled');
            } else {
                this.submitButton.element.setAttribute('disabled', 'disabled');
            }
        };

        registerInputs.push(...[
            new RegisterInput('name', 'text', ValidateText, callback),
            new RegisterInput('last name', 'text', ValidateText, callback),
            new RegisterInput('email', 'email', ValidateEmail, callback),
        ]);

        /* eslint-disable-next-line */
        for (let input of registerInputs) {
            this.element.appendChild(input.element);
        }
        this.element.appendChild(this.submitButton.element);
        this.element.appendChild(this.cancelRegisterBtn.element);
        this.cancelRegisterBtn.element.addEventListener('click', () => {
            registerInputs.forEach((input) => {
                (input.element as HTMLInputElement).value = '';
                input.element.style.backgroundColor = 'white';
            });
        });
        this.submitButton.element.addEventListener('click', () => {
                this.router.navigateTo('/');
        });
    }
}
