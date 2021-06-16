import { Winner } from './Winner';
import { Dictionary } from '../utils/Dictionary';
import { api } from '../utils/apiWrapper'

export class Winners {
    protected _winners: Winner[] = [];
    protected _page: number = 1;
    public pageSize: number = 10;
    protected _total: number = 0;


    public get page(): number {
        return this._page;
    }

    public get winners(): Winner[] {
        return this._winners;
    }

    public get total(): number {
        return this._total;
    }

    public async next(): Promise<Winner[]> {
        return this.loadPage(this._page + 1);
    }

    public async prev(): Promise<Winner[]> {
        return this.loadPage(this._page - 1);
    }

    public async loadPage(page: number): Promise<Winner[]> {
        this._page = page;
        await this.load();
        return this.winners;
    }

    public async create(id: number, wins: number, time: number): Promise<void> {
        await api({
            url: '/winners',
            method: 'post',
            params: {
                id: id,
                wins: wins,
                time: time
            }
        });
        await this.load();
    }

    protected async load(): Promise<void> {
        const result = await api<Dictionary[]> ({
            url: '/winners',
            method: 'get',
            params: {
                page: this._page,
                limit: this.pageSize,
            }
        });
        this._total = Number.parseInt(result.headers["x-total-count"].toString());
        if (typeof result.response !== 'string') {
            this._winners = result.response.map(x => new Winner(x));
        }
    }

    public async delete(id: number): Promise<void> {
        api({
            url: '/winners/' + id,
            method: 'delete',
            params: {
                id: id
            }
        });
        await this.load();
    }
}