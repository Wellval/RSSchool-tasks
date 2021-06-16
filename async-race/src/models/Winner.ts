import { api } from '../utils/apiWrapper';
import { Dictionary } from '../utils/Dictionary';

export class Winner {
    protected _id: number;
    protected _wins: number;
    protected _time: number;
    protected _name: string;
    protected _color: string;

    public get id() {
        return this._id;
    }

    public get wins() {
        return this._wins;
    }

    public get name() {
        return this._name;
    }

    public get color() {
        return this._color;
    }

    public get time() {
        return this._time;
    }

    public set time(value: number) {
        this._time = value;
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
            data: {
                id: this._id,
                wins: this._wins,
                time: this._time,
                name: this._name,
                color: this._color
            }
        })
    }

    constructor(values: Dictionary) {
        this._id = values.id as number;
        this._wins = values.wins as number;
        this._time = values.time as number;
        this._name = values.name as string;
        this._color = values.color as string;
    }
}