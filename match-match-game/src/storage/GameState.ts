import { StepEnum } from './StepEnum';
import { Card} from './Card';

export class GameState {

    public step: StepEnum;
    public cards: Card[];

    constructor() {
        this.step = StepEnum.Initial;
        this.cards = [];
    }

    public start(): void {
        
    }
}