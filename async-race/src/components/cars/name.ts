import { BaseComponent } from '../base-component';

export class CarName extends BaseComponent {
    constructor(name: string) {
        super('div', ['car-name']);
        this.element.innerText = name;
    }
}