import { Header } from './components/header/header';
import { AboutField } from './components/about-field/about-field';
import { HeaderButton } from './components/header-button/header-button';
import { RegisterWindow } from './components/register-window/register-window';
import { WindowOverlay } from './components/window-overlay/window-overlay';

export class AboutPage {
    private readonly header: Header;

    private readonly aboutField: AboutField;

    private readonly headerButton: HeaderButton;

    private readonly registerWindow: RegisterWindow;

    private readonly windowOverlay: WindowOverlay;

    constructor(public rootElement: HTMLElement) {
        this.header = new Header();
        this.aboutField = new AboutField();
        this.headerButton = new HeaderButton('Register');
        this.windowOverlay = new WindowOverlay();
        this.registerWindow = new RegisterWindow();
        this.rootElement.appendChild(this.header.element);
        this.header.element.appendChild(this.headerButton.element);
        this.headerButton.element.addEventListener('click', () => {
            this.rootElement.appendChild(this.windowOverlay.element);
            this.aboutField.element.appendChild(this.registerWindow.element);
        });
        this.rootElement.appendChild(this.aboutField.element);
    }
}
