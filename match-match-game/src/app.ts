import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Timer } from './components/timer/timer';
import { MoveCounter } from './components/move-counter/move-counter';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
export class App {
    private readonly header: Header;

    private readonly timer: Timer;

    private readonly moveCounter: MoveCounter;

    private readonly game: Game;

    private readonly footer: Footer;

    constructor(private readonly rootElement: HTMLElement) {
        this.header = new Header();
        this.timer = new Timer();
        this.moveCounter = new MoveCounter();
        this.game = new Game(this.moveCounter);
        this.footer = new Footer();
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.timer.element);
        this.rootElement.appendChild(this.moveCounter.element);
        this.rootElement.appendChild(this.game.element);
        this.rootElement.appendChild(this.footer.element);
    }

    async start() {
        const res = await fetch('./images.json');
        const categories: ImageCategoryModel[] = await res.json();
        const cat = categories[0];
        const images = cat.images.map((name) => `../${cat.category}/${name}`);
        this.game.newGame(images);
    }
}
