import { BaseComponent } from '../base-component';
import './register-input.scss';

export type Validator = (value: string) => boolean;

export class RegisterInput extends BaseComponent {
    lastValid = false;

    constructor(
        private readonly placeholder: string,
        private readonly type: string,
        private readonly validate: Validator,
        callback: () => void,
    ) {
        super('input', ['register-input']);
        this.element.setAttribute('required', '');
        this.placeholder = placeholder;
        this.validate = validate;
        this.element.addEventListener('input', (e: Event) => {
            this.lastValid = this.validate((e.target as HTMLInputElement).value);
            callback();
        });
        this.element.setAttribute('placeholder', this.placeholder as string);
        this.element.setAttribute('type', this.type as string);
    }
}
