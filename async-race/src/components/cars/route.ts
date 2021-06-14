import { BaseComponent } from '../base-component';
import { Car } from './car';
import { Flag } from './flag';
import { Car as CarModel } from '../../models/Car';
import { CarName } from './name';
import { Button } from '../button';

export class CarRoute extends BaseComponent {
    private readonly selectBtn = new Button('Select', 'select');

    private readonly removeBtn = new Button('Remove', 'remove');

    private readonly startBtn = new Button('A', 'move-btn');

    private readonly toStartBtn = new Button('B', 'move-btn');

    constructor(car: CarModel) {
        super('div', ['car-route']);
        this.element.appendChild(new CarName(car.name).element);
        const carEl = new Car(car.name, car.color);
        this.element.appendChild(carEl.element);
        const btnsContainer = document.createElement('div');
        btnsContainer.classList.add('btns-container');
        this.element.appendChild(btnsContainer);
        let buttons = [this.removeBtn.element, this.selectBtn.element, this.startBtn.element, this.toStartBtn.element];
        for (let btn of buttons) {
            btnsContainer.appendChild(btn);
        }
        this.element.appendChild(new Flag().element);

        this.startBtn.element.addEventListener('click', async () => {
            await carEl.moveCar.play();
        });
        this.toStartBtn.element.addEventListener('click', async () => {
            await carEl.moveCar.cancel();
        });
    }
}