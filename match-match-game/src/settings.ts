import { Router } from './routing';
import { HeaderButton } from './components/header-button/header-button';
import { Header } from './components/header/header';
import { RegisterWindow } from './components/register-window/register-window';
import { SettingsField } from './components/settings-field/settings-field';
import { WindowOverlay } from './components/window-overlay/window-overlay';
import Page from './Page';

export const myStorage = window.localStorage;

export class SettingsPage extends Page {
    private readonly header: Header;

    private readonly router: Router;

    private readonly settingsField: SettingsField;

    private startButton: HeaderButton;

    private registerButton: HeaderButton;

    private readonly windowOverlay: WindowOverlay;

    private readonly registerWindow: RegisterWindow;

    public static urlPattern = 'settings';

    constructor(private readonly rootElement: HTMLElement) {
        super();
        this.header = new Header();
        this.settingsField = new SettingsField();
        this.windowOverlay = new WindowOverlay();
        this.router = new Router();
        this.registerWindow = new RegisterWindow();
        this.rootElement.appendChild(this.header.element);
        this.registerButton = new HeaderButton('Register');
        this.startButton = new HeaderButton('Start Game');
        this.header.element.appendChild(this.startButton.element);
        this.header.element.appendChild(this.registerButton.element);
        this.rootElement.appendChild(this.settingsField.element);
        this.handleButtons();
    }

    handleButtons() {
        this.startButton.element.addEventListener('click', () => {
            (this.startButton.element as HTMLAnchorElement).href = '';
            this.router.navigateTo('');
        });

        this.registerButton.element.addEventListener('click', () => {
            this.rootElement.appendChild(this.windowOverlay.element);
            this.settingsField.element.appendChild(this.registerWindow.element);
        });
        this.windowOverlay.element.addEventListener('click', () => {
            this.rootElement.removeChild(this.windowOverlay.element);
            this.settingsField.element.removeChild(this.registerWindow.element);
        });
    }
}
