import { NavBar } from '../components/navbar';
import Page from './Page';
import { Garage } from '../models/Garage';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import { CarRoute } from '../components/cars/route';
import { Car } from '../models/Car';
import { Headline } from '../components/headline';
import templates from '../carTemplates.json'
import { Overlay } from '../components/winMessage';
import { Winners } from '../models/Winners';

let localStorage = window.localStorage;

export class GaragePage extends Page {
    public static urlPattern = '';

    private garage = new Garage();

    private winners = new Winners();

    private readonly navBar: NavBar;

    public selectedCar: Car | null = null;

    private readonly createBtn = new Button('Create', 'create');

    public updateBtn = new Button('Update', 'update');

    private readonly carsWrapper = new Wrapper();

    public createName = new Input('text');

    public createColor = new Input('color');

    public updateName = new Input('text');

    public updateColor = new Input('color');

    public raceBtn = new Button('Race', 'race');

    public resetBtn = new Button('Reset', 'reset');

    private readonly generateBtn = new Button('Generate cars', 'generate');

    private readonly nextBtn = new Button('Next', 'next');

    private readonly prevBtn = new Button('Prev', 'prev');

    private readonly overlay = new Overlay(this);

    public winner: number | null = null;

    public isRacing: Boolean = false;

    private carRoutes: CarRoute[] = [];

    private winWindow: HTMLElement;

    constructor(public rootElement: HTMLElement) {
        super();
        this.navBar = new NavBar();

        (this.resetBtn.element as HTMLInputElement).disabled = true;

        this.updateBtn.element.addEventListener('click', this.updateCar);

        const pageNum = Number.parseInt(localStorage.getItem('page number')!) || 1;
        this.garage.loadPage(pageNum).then(() => this.render()); 

        this.winWindow = document.createElement('div');
        this.winWindow.classList.add('win-container');


        (this.createBtn.element as HTMLInputElement).disabled = true;
        (this.updateBtn.element as HTMLInputElement).disabled = true;
        (this.updateName.element as HTMLInputElement).placeholder = 'Select car';

        this.createName.element.addEventListener('input', () => {
            if ((this.createName.element as HTMLInputElement).value !== '') {
                (this.createBtn.element as HTMLInputElement).disabled = false;
            } else {
                (this.createBtn.element as HTMLInputElement).disabled = true;
            }
        });

        this.updateName.element.addEventListener('input', () => {
            if ((this.updateName.element as HTMLInputElement).value !== '' && this.selectedCar) {
                (this.updateBtn.element as HTMLInputElement).disabled = false;
            } else {
                (this.updateBtn.element as HTMLInputElement).disabled = true;
            }
        });

        this.appendComponents();

        this.createBtn.element.addEventListener('click', this.createCar.bind(this));
        this.nextBtn.element.addEventListener('click', this.next.bind(this));
        this.prevBtn.element.addEventListener('click', this.prev.bind(this));
        this.updateBtn.element.addEventListener('click', this.updateCar.bind(this));
        this.generateBtn.element.addEventListener('click', this.generateCars.bind(this));

        this.resetBtn.element.addEventListener('click', async () => {
            (this.resetBtn.element as HTMLInputElement).disabled = true;
            this.isRacing = false;
            this.winner = null;
            for (let car of this.carRoutes) {
                car.reset();
            }

            for (let car of this.garage.cars) {
                await car.stop();
            }
            (this.raceBtn.element as HTMLInputElement).disabled = false;

        });

        this.raceBtn.element.addEventListener('click', async () => {
            (this.raceBtn.element as HTMLInputElement).disabled = true;
            (this.resetBtn.element as HTMLInputElement).disabled = false;
            this.isRacing = true;
            this.winner = null;
            for (let car of this.carRoutes) {
                car.race();
            }
        });
    }

    appendComponents() {
        this.rootElement.appendChild(this.navBar.element);
        let inputsWrapper = document.createElement('div');
        inputsWrapper.classList.add('inputs-wrapper');
        this.rootElement.appendChild(inputsWrapper);
        const inputs = [this.createName, this.createColor, this.createBtn, this.updateName, 
            this.updateColor, this.updateBtn, this.raceBtn, this.resetBtn, this.generateBtn];
        for (let input of inputs) {
            inputsWrapper.appendChild(input.element);
        }
        this.rootElement.appendChild(this.carsWrapper.element);
        const paginationWrapper = document.createElement('div');
        paginationWrapper.classList.add('pagination-wrapper');
        paginationWrapper.appendChild(this.prevBtn.element);
        paginationWrapper.appendChild(this.nextBtn.element);
        this.rootElement.appendChild(paginationWrapper);
        localStorage.setItem('page number', (this.garage.page).toString());
    }

    public async handleWinner() {
        if (this.winner) {
            const carObj = this.garage.cars.find(x => x.id == this.winner)!;
            this.rootElement.appendChild(this.overlay.element);
            this.overlay.element.appendChild(this.winWindow);
            this.winWindow.innerText = `The winner is ${carObj.name}!`;

            const winnerObj = await this.winners.getSingle(carObj.id);

            console.log(carObj)

            const time = carObj.distance / carObj.velocity / 1000;

            if (winnerObj) {
                winnerObj.wins++;
                winnerObj.time = Math.min(winnerObj.time, time);
                console.log(winnerObj)
            } else {
                console.log(await this.winners.create(carObj.id, 1, time, carObj.name, carObj.color));
            }
        }
    }

    async render() {

        this.carsWrapper.element.innerHTML = "";
        this.carRoutes = [];

        this.selectedCar = null;
        
        for (let car of this.garage.cars) {
            const route = new CarRoute(car, this.garage, this);
            this.carsWrapper.element.appendChild(route.element);
            this.carRoutes.push(route);
        }
        
        this.carsWrapper.element.prepend(new Headline(`Garage (${this.garage.total})`).element);
        this.carsWrapper.element.prepend(new Headline(`Page #${this.garage.page}`).element);
    }

    private async updateCar() {
        if (this.selectedCar) {
            this.selectedCar.name = (this.updateName.element as HTMLInputElement).value;
            this.selectedCar.color = (this.updateColor.element as HTMLInputElement).value;
            this.garage.loadPage(this.garage.page).then(() => this.render());
            this.selectedCar = null;
        }
    }

    private async createCar() {
        this.garage.create((this.createName.element as HTMLInputElement).value,
        (this.createColor.element as HTMLInputElement).value);
        this.garage.loadPage(this.garage.page).then(() => this.render());
    }

    private getRandomElement(list: string[]): string {
        const index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    async generateCars() {
        for (let i = 0; i < 7; i++) {
            const [name, brand, color] = [
                this.getRandomElement(templates.names),
                this.getRandomElement(templates.brands),
                this.getRandomElement(templates.colors)
            ];
            await this.garage.create(brand + ' ' + name, color);
        }
        await this.garage.loadPage(this.garage.page).then(() => this.render());
    }

    private saveCurrentPage() {
        localStorage.setItem('page number', this.garage.page.toString());
    }

    public async next() {
        if (this.garage.page === Math.ceil(this.garage.total / this.garage.pageSize)) {
            return;
        }
        await this.garage.next();
        await this.render();
        this.saveCurrentPage();
    }

    public async prev() {
        if (this.garage.page === 1) {
            return;
        }
        await this.garage.prev();
        await this.render();
        this.saveCurrentPage();
    }
}