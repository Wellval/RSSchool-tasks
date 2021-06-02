import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Timer } from './components/timer/timer';
import { MoveCounter } from './components/move-counter/move-counter';
import { Header } from './components/header/header';
import { HeaderButton } from './components/header-button/header-button';
import Page from './Page';
import { WindowOverlay } from './components/window-overlay/window-overlay';
import { RegisterWindow } from './components/register-window/register-window';
import { myStorage } from './settings';

export class App extends Page {
    private readonly game: Game;

    private readonly timer: Timer;

    private readonly moveCounter: MoveCounter;

    private readonly header: Header;

    private headerButton: HeaderButton;

    private registerButton: HeaderButton;

    private readonly windowOverlay: WindowOverlay;

    private readonly registerWindow: RegisterWindow;

    public static urlPattern = '';

    constructor(private readonly rootElement: HTMLElement) {
        super();
        this.timer = new Timer();
        this.windowOverlay = new WindowOverlay();
        this.registerWindow = new RegisterWindow();
        this.moveCounter = new MoveCounter();
        this.game = new Game(this.moveCounter, this.timer);
        this.header = new Header();
        this.registerButton = new HeaderButton('Register');
        this.headerButton = new HeaderButton('Start Game');
        this.rootElement.appendChild(this.header.element);
        this.header.element.appendChild(this.headerButton.element);
        this.header.element.appendChild(this.registerButton.element);
        this.rootElement.appendChild(this.timer.element);
        this.rootElement.appendChild(this.moveCounter.element);
        this.start();
    }

    protected async start() {
        const n = myStorage.getItem('cardsNumber');
        const number = parseInt(n as string, 10) ** 2 / 2;
        const cardsType = myStorage.getItem('type');
        const res = await fetch('./images.json');
        const categories: ImageCategoryModel[] = await res.json();
        const typeIndex = categories.findIndex((x) => x.category === cardsType);
        const images = categories[typeIndex].images.slice(0, number).map((name) => `../${categories[typeIndex].category}/${name}`);
        this.registerButton.element.addEventListener('click', () => {
            this.rootElement.appendChild(this.windowOverlay.element);
            this.windowOverlay.element.appendChild(this.registerWindow.element);
        });
        this.headerButton.element.addEventListener('click', () => {
            if (!this.game.isStarted) {
                this.rootElement.appendChild(this.game.element);
                this.game.newGame(images);
                this.timer.time = 0;
                this.timer.element.innerText = '00:00:00';
                this.timer.setTimer();
                this.game.isStarted = true;
                this.headerButton.element.innerText = 'Stop Game';
            } else {
                this.headerButton.element.innerText = 'Start Game';
                clearTimeout(this.timer.intervalId!);
                this.game.isStarted = false;
                this.rootElement.removeChild(this.game.element);
                this.timer.element.innerText = '00:00:00';
            }
        });
        this.windowOverlay.element.addEventListener('click', () => {
            this.rootElement.removeChild(this.windowOverlay.element);
            this.game.element.removeChild(this.registerWindow.element);
        });

        if (number === 4 * 2) {
            (document.querySelector('.cards-field') as HTMLElement).style.width = '53%';
        }
        if (number === 8 ** 2 / 2) {
            (document.querySelector('.cards-field') as HTMLElement).style.width = '95%';
        }
    }
}
