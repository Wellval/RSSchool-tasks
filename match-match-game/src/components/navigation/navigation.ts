import { BaseComponent } from '../base-component';
import { MenuItem } from '../menu-item/menu-item';
import { MenuLink } from '../menu-link/menu-link';
import './navigation.scss';

export class Navigation extends BaseComponent {
    private readonly aboutGameItem;

    private readonly bestScoreItem;

    private readonly gameSettingsItem;

    private readonly aboutGameLink;

    private readonly bestScoreLink;

    private readonly gameSettingsLink;

    constructor() {
        super('ul', ['nav']);
        this.aboutGameItem = new MenuItem();
        this.bestScoreItem = new MenuItem();
        this.gameSettingsItem = new MenuItem();

        this.aboutGameLink = new MenuLink();
        this.bestScoreLink = new MenuLink();
        this.gameSettingsLink = new MenuLink();

        this.appendLinks();
    }

    appendLinks() {
        if (this.aboutGameLink.element instanceof HTMLAnchorElement) {
            this.aboutGameLink.element.href = '/about';
        }
        if (this.bestScoreLink.element instanceof HTMLAnchorElement) {
            this.bestScoreLink.element.href = '/best-score';
        }
        if (this.gameSettingsLink.element instanceof HTMLAnchorElement) {
            this.gameSettingsLink.element.href = '/settings';
        }
        this.aboutGameLink.element.innerHTML = '<i class="fas fa-question-circle"></i> About Game';
        this.bestScoreLink.element.innerHTML = '<i class="fas fa-star"></i> Best Score';
        this.gameSettingsLink.element.innerHTML = '<i class="fas fa-cogs"> Game Settings';

        this.element.appendChild(this.aboutGameItem.element);
        this.element.appendChild(this.bestScoreItem.element);
        this.element.appendChild(this.gameSettingsItem.element);

        this.aboutGameItem.element.appendChild(this.aboutGameLink.element);
        this.bestScoreItem.element.appendChild(this.bestScoreLink.element);
        this.gameSettingsItem.element.appendChild(this.gameSettingsLink.element);
    }
}
