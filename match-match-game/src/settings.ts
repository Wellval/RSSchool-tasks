import { Router } from './routing';
import { HeaderButton } from './components/header-button/header-button';
import { Header } from './components/header/header';
import { RegisterWindow } from './components/register-window/register-window';
import { SelectSetting } from './components/select-setting/select-setting';
import { SettingOption } from './components/setting-option/setting-option';
import { SettingsField } from './components/settings-field/settings-field';
import { WindowOverlay } from './components/window-overlay/window-overlay';
import Page from './Page';

export const myStorage = window.localStorage;

export class SettingsPage extends Page {
    private readonly header: Header;

    private readonly router: Router;

    private readonly settingsField: SettingsField;

    private readonly difficulty: SelectSetting;

    private headerButton: HeaderButton;

    private registerButton: HeaderButton;

    private readonly windowOverlay: WindowOverlay;

    private readonly registerWindow: RegisterWindow;

    public static urlPattern = 'settings';

    constructor(private readonly rootElement: HTMLElement) {
        super();
        this.header = new Header();
        this.settingsField = new SettingsField();
        this.difficulty = new SelectSetting();
        this.windowOverlay = new WindowOverlay();
        this.router = new Router();
        this.registerWindow = new RegisterWindow();
        this.rootElement.appendChild(this.header.element);
        this.registerButton = new HeaderButton('Register');
        this.headerButton = new HeaderButton('Start Game');
        this.header.element.appendChild(this.headerButton.element);
        this.header.element.appendChild(this.registerButton.element);
        this.rootElement.appendChild(this.settingsField.element);
        this.settingsField.element.appendChild(this.difficulty.element);

        this.headerButton.element.addEventListener('click', () => {
            (this.headerButton.element.firstChild as HTMLAnchorElement).href = '';
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

        this.initDifficulty();
    }

    initDifficulty() {
        const levels = [
            new SettingOption(4),
            new SettingOption(6),
            new SettingOption(8),
        ];

        const n = (myStorage.getItem('cardsNumber'));
        const number = parseInt(n as string, 10);

        this.difficulty.element.addEventListener('change', () => {
            const cardsNum = (this.difficulty.element as HTMLSelectElement).value;
            myStorage.setItem('cardsNumber', cardsNum);
        });

        for (let i = 0; i < levels.length; i++) {
            this.difficulty.element.appendChild(levels[i].element);
        }

        (this.difficulty.element as HTMLSelectElement).value = number.toString();
    }
}
