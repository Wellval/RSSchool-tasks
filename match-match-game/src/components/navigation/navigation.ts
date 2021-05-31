import { BaseComponent } from '../base-component';
import { MenuItem } from '../menu-item/menu-item';
import { MenuLink } from '../menu-link/menu-link';
import './navigation.scss';
import { Router } from '../../routing';

export class Navigation extends BaseComponent {
    private readonly aboutGameLink;

    private readonly bestScoreLink;

    private readonly gameSettingsLink;

    private readonly router: Router;

    constructor() {
        super('ul', ['nav']);
        this.router = new Router();

        this.aboutGameLink = new MenuLink('<i class="fas fa-question-circle"></i> About Game');
        this.bestScoreLink = new MenuLink('<i class="fas fa-star"></i> Best Score');
        this.gameSettingsLink = new MenuLink('<i class="fas fa-cogs"></i> Game Settings');

        const menuItems = [
            new MenuItem(this.aboutGameLink.element),
            new MenuItem(this.bestScoreLink.element),
            new MenuItem(this.gameSettingsLink.element),
        ];

        menuItems.forEach((item) => {
           this.element.appendChild(item.element);
        });

        this.appendLinks();
    }

    appendLinks() {
        if (this.aboutGameLink.element instanceof HTMLAnchorElement) {
            this.aboutGameLink.element.addEventListener('click', () => {
                this.router.navigateTo('/about');
            });
        }
        if (this.bestScoreLink.element instanceof HTMLAnchorElement) {
            this.bestScoreLink.element.addEventListener('click', () => {
                this.router.navigateTo('/score');
            });
        }
        if (this.gameSettingsLink.element instanceof HTMLAnchorElement) {
            this.gameSettingsLink.element.href = '/settings';
        }
    }
}
