import { BaseComponent } from '../base-component';
import { SettingOption } from '../setting-option/setting-option';
import { SelectSetting } from '../select-setting/select-setting';
import { myStorage } from '../../settings';
import './settings-field.scss';

export class SettingsField extends BaseComponent {
    private readonly difficulty: SelectSetting;

    private readonly type: SelectSetting;

    constructor() {
        super('div', ['settings-field']);
        this.difficulty = new SelectSetting();
        this.type = new SelectSetting();
        const container = document.createElement('div');
        this.element.appendChild(container);
        container.appendChild(this.difficulty.element);
        container.appendChild(this.type.element);
        this.initDifficulty();
        this.initCardsType();
    }

    initDifficulty() {
        const n = (myStorage.getItem('cardsNumber'));
        const number = parseInt(n as string, 10);

        const levels = [
            new SettingOption('4', '4 x 4'),
            new SettingOption('6', '6 x 6'),
            new SettingOption('8', '8 x 8'),
        ];

        this.difficulty.element.addEventListener('change', () => {
            const cardsNum = (this.difficulty.element as HTMLSelectElement).value;
            myStorage.setItem('cardsNumber', cardsNum);
        });

        for (let i = 0; i < levels.length; i++) {
            this.difficulty.element.appendChild(levels[i].element);
        }

        (this.difficulty.element as HTMLSelectElement).value = number.toString();
    }

    initCardsType() {
        const t = (myStorage.getItem('type'));
        const types = [
            new SettingOption('animals', 'animals'),
            new SettingOption('food', 'food'),
        ];

        this.type.element.addEventListener('change', () => {
            const type = (this.type.element as HTMLSelectElement).value;
            myStorage.setItem('type', type);
        });

        for (let i = 0; i < types.length; i++) {
            this.type.element.appendChild(types[i].element);
        }

        (this.type.element as HTMLSelectElement).value = t as string;
    }
}
