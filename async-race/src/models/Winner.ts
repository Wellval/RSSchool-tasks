import { api } from '../utils/apiWrapper';
import { Dictionary } from '../utils/Dictionary';

export class Winner {
    protected _id: number;
    protected _wins: number;
    protected _time: number;

    public get id() {
        return this._id;
    }

    public get wins() {
        return this._wins;
    }

    public get time() {
        return this._time;
    }

    public set id(value: number) {
        this._id = value;
        this.update();
    }

    public set wins(value: number) {
        this._wins = value;
        this.update();
    }

    public async update(): Promise<void> {
        api({
            url: '/winners/' + this._id,
            method: 'put',
            params: {
                id: this._id,
            }
        })
    }

    constructor(values: Dictionary) {
        this._id = values.id as number;
        this._wins = values.wins as number;
        this._time = values.time as number;
    }
}