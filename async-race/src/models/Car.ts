import { Dictionary } from "../utils/Dictionary";
import { api } from '../utils/apiWrapper';

export type EngineState = {
    velocity: number;
    distance: number;
};

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

    protected async requestEngine(state: 'started' | 'stopped' | 'drive') {
        return api<EngineState>({
            url: '/engine',
            method: 'get',
            params: {
                id: this._id,
                status: state
            }
        });
    }

    public async start(): Promise<EngineState> {
        const result = await this.requestEngine('started');
        return result.response as EngineState;
    }

    public async stop(): Promise<EngineState> {
        const result = await this.requestEngine('stopped');
        return result.response as EngineState;
    }

    public async drive(): Promise<boolean | null> {
        const result = await this.requestEngine('drive');

        switch (result.code) {
            case 200:
                return true;
            case 500:
                return false;
            default:
                return null;
        }
    }

    constructor(values: Dictionary) {
        this._name = values.name as string;
        this._color = values.color as string;
        this._id = values.id as number;
    }
}