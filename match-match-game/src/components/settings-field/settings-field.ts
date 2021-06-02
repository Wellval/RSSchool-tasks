import { BaseComponent } from '../base-component';
import { SettingOption } from '../setting-option/setting-option'
import { SelectSetting } from '../select-setting/select-setting';
import { myStorage } from '../../settings'
import './settings-field.scss';

export class SettingsField extends BaseComponent {
    private readonly difficulty: SelectSetting;

    constructor() {
        super('div', ['settings-field']);
        this.difficulty = new SelectSetting();
        this.element.appendChild(this.difficulty.element);
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
