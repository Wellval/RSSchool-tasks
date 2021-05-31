import { BaseComponent } from '../base-component';

export class Results extends BaseComponent {
    constructor(private readonly innerText: string) {
        super('p');
        this.element.innerText = innerText;
    }
}
