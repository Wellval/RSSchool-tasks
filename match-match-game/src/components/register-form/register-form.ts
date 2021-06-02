import './register-form.scss';
import { BaseComponent } from '../base-component';
import { RegisterInput, Validator } from '../register-input/register-input';
import { Router } from '../../routing';
import { HeaderButton } from '../header-button/header-button';

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
    private readonly submitButton: HeaderButton;

    private readonly cancelRegisterBtn: HeaderButton;

    private readonly router: Router;

    constructor() {
        super('form', ['register-form']);
        this.router = new Router();
        const registerInputs: RegisterInput[] = [];
        this.submitButton = new HeaderButton('Add User');
        this.submitButton.element.setAttribute('disabled', 'disabled');
        this.submitButton.element.style.pointerEvents = 'none';
        (this.submitButton.element as HTMLAnchorElement).href = '#';
        this.cancelRegisterBtn = new HeaderButton('Cancel');

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
                console.log(this.submitButton.element)
                this.submitButton.element.removeAttribute('disabled');
                this.submitButton.element.style.pointerEvents = 'auto';
                this.submitButton.element.addEventListener('click', () => {
                    this.router.navigateTo('');
                })
            } else {
                this.submitButton.element.setAttribute('disabled', 'disabled');
                this.submitButton.element.style.pointerEvents = 'none';
            }
        };

        registerInputs.push(...[
            new RegisterInput('name', 'text', ValidateText, callback),
            new RegisterInput('last name', 'text', ValidateText, callback),
            new RegisterInput('email', 'email', ValidateEmail, callback),
        ]);

        for (let i = 0; i < registerInputs.length; i++) {
            this.element.appendChild(registerInputs[i].element);
        }
        this.element.appendChild(this.submitButton.element);
        this.element.appendChild(this.cancelRegisterBtn.element);
        this.submitButton.element.addEventListener('click', () => {
                this.router.navigateTo('about');
        });
        this.cancelRegisterBtn.element.addEventListener('click', () => {
            registerInputs.forEach((input) => {
                (input.element as HTMLInputElement).value = '';
                input.element.style.backgroundColor = 'white';
            });
        });
    }
}
