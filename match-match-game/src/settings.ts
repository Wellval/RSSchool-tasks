import { Header } from './components/header/header';
import { SettingsField } from './components/settings-field/settings-field';

export class ScorePage {
    private readonly header: Header;

    private readonly settingsField: SettingsField;

    constructor(private readonly rootElement: HTMLElement) {
        this.header = new Header();
        this.settingsField = new SettingsField();
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.settingsField.element);
    }
}