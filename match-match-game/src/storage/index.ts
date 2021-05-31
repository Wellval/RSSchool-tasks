import { GameState } from './GameState';
import { User } from './User';

export class Storage {

    public users: User[];
    public gameState: GameState;

    constructor() {
        // users from read indexedDb
        if (false) { // if found something
            // save to this.users
        } else {
            this.users = [];
        }
        this.gameState = new GameState();
    }
}