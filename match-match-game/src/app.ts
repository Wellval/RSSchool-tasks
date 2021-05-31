import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Timer } from './components/timer/timer';
import { MoveCounter } from './components/move-counter/move-counter';
import { Header } from './components/header/header';
import { HeaderButton } from './components/header-button/header-button';

export class App {
    private readonly game: Game;

    private readonly timer: Timer;

    private readonly moveCounter: MoveCounter;

    private readonly header: Header;

    private headerButton: HeaderButton;

    constructor(private readonly rootElement: HTMLElement) {
        this.timer = new Timer();
        this.moveCounter = new MoveCounter();
        this.game = new Game(this.moveCounter, this.timer);
        this.header = new Header();
        this.headerButton = new HeaderButton('Start Game');
        this.headerButton.element.innerText = 'Start game';
        this.rootElement.appendChild(this.header.element);
        this.header.element.appendChild(this.headerButton.element);
        this.rootElement.appendChild(this.timer.element);
        this.rootElement.appendChild(this.moveCounter.element);
        this.rootElement.appendChild(this.game.element);
    }

    async start() {
        const res = await fetch('./images.json');
        const categories: ImageCategoryModel[] = await res.json();
        const cat = categories[0];
        const images = cat.images.map((name) => `../${cat.category}/${name}`);
        this.headerButton.element.addEventListener('click', () => {
            if (!this.game.isStarted) {
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
            }
        });
    }
}
