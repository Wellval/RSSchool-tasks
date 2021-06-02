import { BaseComponent } from '../base-component';
import { myStorage } from '../../settings';

export class SettingOption extends BaseComponent {
    constructor(private readonly storageItem: string, private readonly innerText: string) {
        super('option');
        this.element.innerText = `${innerText}`;
        (this.element as HTMLSelectElement).value = storageItem.toString();
    }
}
