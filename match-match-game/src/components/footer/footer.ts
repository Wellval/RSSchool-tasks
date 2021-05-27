import { BaseComponent } from '../base-component';
import './footer.scss';

export class Footer extends BaseComponent {
    constructor() {
        super('footer');
        this.element.innerText = 'Rolling Scopes School 2021';
    }
}
