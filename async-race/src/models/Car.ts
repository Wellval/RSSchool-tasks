import { Dictionary } from "../utils/Dictionary";
import { api } from '../utils/apiWrapper';

export class Car {

    protected _name: string;
    protected _color: string;
    protected _id: number;

    public get name(): string {
        return this._name;
    }

    public get id(): number {
        return this._id;
    }

    public set name(value: string) {
        this._name = value;
        this.update();
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
        this.update();
    }

    protected async update(): Promise<void> {
        api({
            url: '/garage/' + this._id,
            method: 'put',
            data: {
                name: this._name,
                color: this._color
            }
        });
    }

    constructor(values: Dictionary) {
        this._name = values.name as string;
        this._color = values.color as string;
        this._id = values.id as number;
    }
}