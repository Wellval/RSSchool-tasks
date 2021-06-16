import { BaseComponent } from '../base-component';
import { Car } from './car';
import { Flag } from './flag';
import { Car as CarModel } from '../../models/Car';
import { CarName } from './name';
import { Button } from '../button';
import { Garage } from '../../models/Garage';
import { GaragePage } from '../../containers/Garage';

export class CarRoute extends BaseComponent {
    private readonly startBtn = new Button('A', 'move-btn');

    private readonly toStartBtn = new Button('B', 'move-btn');

    private readonly removeBtn = new Button('Remove', 'remove');

    private readonly selectBtn = new Button('Select', 'select');

    carEl: Car;

    constructor(private readonly car: CarModel, private readonly garage: Garage, private readonly garagePage: GaragePage) {
        super('div', ['car-route']);
        this.element.appendChild(new CarName(car.name).element);
        this.carEl = new Car(car.name, car.color);
        this.element.appendChild(this.carEl.element);

        const btnsContainer = document.createElement('div');
        btnsContainer.classList.add('btns-container');
        this.element.appendChild(btnsContainer);
        const buttons = [this.removeBtn.element, this.selectBtn.element, this.startBtn.element, this.toStartBtn.element];

        for (let button of buttons) {
            btnsContainer.appendChild(button);
        }

        (this.toStartBtn.element as HTMLInputElement).disabled = true;

        this.removeBtn.element.addEventListener('click', async () => {
            await this.garage.delete(car.id);
            await this.garage.loadPage(this.garage.page);
            while (this.garage.cars.length === 0 && this.garage.page !== 1) {
                await this.garage.prev();
            }
            this.garagePage.render();
        });

        this.selectBtn.element.addEventListener('click', () => {
                this.garagePage.selectedCar = car;
        });

        this.startBtn.element.addEventListener('click', () => {
            this.startCar();
        });
        this.toStartBtn.element.addEventListener('click', this.toStart.bind(this));
        this.garagePage.resetBtn.element.addEventListener('click', this.reset.bind(this));
        this.element.appendChild(new Flag().element);
    }

    async startCar() {
        (this.startBtn.element as HTMLInputElement).disabled = true;
        (this.toStartBtn.element as HTMLInputElement).disabled = false;
        const carData = await this.car.start();
        console.log(carData)
        this.carEl.moveCar.play();
        this.carEl.moveCar.playbackRate = 1000 / (carData.distance / carData.velocity);
        const result = await this.car.drive();
        console.log(result)
        if (result === false) {
            this.carEl.moveCar.pause();
        } else if (result === null) {
            this.carEl.moveCar.cancel();
            this.car.stop();
        } else if (result === true) {
            if (this.garagePage.isRacing && this.garagePage.winner === null) {
                this.garagePage.winner = this.car.name;
                this.garagePage.winnerId = this.car.id;
                this.garagePage.handleWinner();
            }
        }
    }

    async toStart() {
        (this.startBtn.element as HTMLInputElement).disabled = false;
        const data = await this.car.stop();
        console.log(data)
        this.carEl.moveCar.cancel();
        (this.toStartBtn.element as HTMLInputElement).disabled = true;
    }

    async race() {
        await this.startCar();
    }

    async reset() {
        await this.toStart();
    }
}