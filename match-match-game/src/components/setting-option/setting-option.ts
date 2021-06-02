import { BaseComponent } from '../base-component';
import { myStorage } from '../../settings';

export class SettingOption extends BaseComponent {
    constructor(private readonly cardsNum: number) {
        super('option');
        const cardsNumber = myStorage.getItem('cardsNumber');
        this.element.innerText = `${cardsNum} x ${cardsNum}`;
        (this.element as HTMLSelectElement).value = cardsNum.toString();
    }
}
