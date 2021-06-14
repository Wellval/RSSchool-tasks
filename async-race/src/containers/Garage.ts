import { NavBar } from '../components/navbar';
import Page from './Page';
import { Garage } from '../models/Garage';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { CarsWrapper } from '../components/cars/wrapper';
import { CarRoute } from '../components/cars/route';
import { Car } from '../models/Car';
import { Headline } from '../components/headline';

export class GaragePage extends Page {
    public static urlPattern = '';

    private garage = new Garage();

    private readonly navBar: NavBar;

    private selectedCar: Car | null = null;

    private readonly createBtn = new Button('Create', 'create');

    private readonly updateBtn = new Button('Update', 'update');

    private readonly carsWrapper = new CarsWrapper();

    public createName = new Input('text');

    public createColor = new Input('color');

    public updateName = new Input('text');

    public updateColor = new Input('color');

    private readonly raceBtn = new Button('Race', 'race');

    private readonly resetBtn = new Button('Reset', 'reset');

    private readonly generateBtn = new Button('Generate cars', 'generate');

    private readonly nextBtn = new Button('Next', 'next');

    private readonly prevBtn = new Button('Prev', 'prev');


    constructor(public rootElement: HTMLElement) {
        super();
        this.navBar = new NavBar();

        this.createBtn.element.addEventListener('click', () => {
            if ((this.createName.element as HTMLInputElement).value !== '') {
                this.garage.create((this.createName.element as HTMLInputElement).value,
                (this.createColor.element as HTMLInputElement).value);
                window.location.reload()
                this.garage.loadPage(1).then(() => this.render())
            }
        });
        this.updateBtn.element.addEventListener('click', this.updateCar);


        this.garage.loadPage(1).then(() => this.render()); // TODO from localStorage

        this.appendComponents();
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
        this.carsWrapper.element.prepend(new Headline(`Page #${this.garage.page}`).element);
    }

    private async render() {

        this.selectedCar = this.garage.cars[0];
        
        for (let car of this.garage.cars) {
            this.carsWrapper.element.appendChild(new CarRoute(car).element);
        }
        
        await this.carsWrapper.element.prepend(new Headline(`Garage (${this.garage.total})`).element);

        await console.log(this.garage.cars)
    }

    private async updateCar() {
    
    }

    private async createCar() {
        
    }
}