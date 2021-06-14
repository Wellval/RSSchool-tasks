import { BaseComponent } from "./base-component";

export class Input extends BaseComponent {
    constructor(type: string) {
        super('input');
        this.element.setAttribute('type', type);
    }
}