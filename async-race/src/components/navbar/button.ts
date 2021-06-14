import { Router } from '../../routing';
import { BaseComponent } from '../base-component';

export class NavButton extends BaseComponent {
    private readonly router: Router;

    constructor(readonly innerText: string, readonly navTo: string) {
        super('a', ['nav-button']);
        this.router = new Router();
        this.element.innerText = innerText;
        (this.element as HTMLAnchorElement).href = '#'; 
        if (this.element instanceof HTMLAnchorElement) {
            this.element.addEventListener('click', () => {
                this.router.navigateTo(this.navTo);
            });
        }
    }
}