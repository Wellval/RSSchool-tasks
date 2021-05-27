import './about-field.scss'
import { BaseComponent } from '../base-component';
import { AboutContainer } from '../about-container/about-container'

export class AboutField extends BaseComponent {
    private readonly aboutContainer: AboutContainer;

    constructor() {
        super('div', ['about-field']);
        this.element.innerHTML = '<h2>How to play?</h2>';
        this.aboutContainer = new AboutContainer();
        this.element.appendChild(this.aboutContainer.element);
    }
}