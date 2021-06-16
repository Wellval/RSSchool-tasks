import { Car } from './Car';
import { api } from '../utils/apiWrapper';
import { Dictionary } from '../utils/Dictionary';


export class Garage {

    protected _cars: Car[] = [];
    protected _total: number = 0;
    protected _page: number = -1;
    public pageSize: number = 7;

    public get cars(): Car[] {
        return this._cars;
    }

    public get total(): number {
        return this._total;
    }

    public get page(): number {
        return this._page;
    }

    protected async load(): Promise<void> {
        const result = await api<Dictionary[]>({
            url: '/garage',
            method: 'get',
            params: {
                _page: this._page,
                _limit: this.pageSize
            }
        });
        this._total = Number.parseInt(result.headers["x-total-count"].toString());
        if (typeof result.response !== 'string') {
            this._cars = result.response.map(x => new Car(x));
        }
    }

    public async next(): Promise<Car[]> {
        return this.loadPage(this._page + 1);
    }

    public async prev(): Promise<Car[]> {
        return this.loadPage(this._page - 1);
    }

    public async loadPage(page: number): Promise<Car[]> {
        this._page = page;
        await this.load();
        return this.cars;
    }

    public async create(name: string, color: string): Promise<void> {
        await api({
            url: '/garage',
            method: 'post',
            data: {
                name: name,
                color: color
            }
        });
        await this.load();
    }

    public async delete(id: number): Promise<void> {
        await api({
            url: '/garage/' + id,
            method: 'delete',
        });
        await api({
            url: '/winners/' + id,
            method: 'delete',
        });
        await this.load();
    }
}

async () => {
    let a = new Garage();
    let cars = await a.loadPage(1);
}

