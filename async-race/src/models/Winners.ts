import { Winner } from './Winner';
import { Dictionary } from '../utils/Dictionary';
import { api } from '../utils/apiWrapper';

export class Winners {
  protected _winners: Winner[] = [];

  protected _page = 1;

  public pageSize = 10;

  protected _total = 0;

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

  public async create(id: number, wins: number, time: number, name: string, color: string): Promise<void> {
    await api({
      url: '/winners',
      method: 'post',
      data: {
        id, wins, time, name, color,
      },
    });
    await this.load();
  }

  protected async load(): Promise<void> {
    const result = await api<Dictionary[]>({
      url: '/winners',
      method: 'get',
      params: {
        _page: this._page,
        _limit: this.pageSize,
      },
    });
    this._total = Number.parseInt(result.headers['x-total-count']?.toString(), 10);
    if (typeof result.response !== 'string') {
      this._winners = result.response.map((x) => new Winner(x));
    }
  }

  public async delete(id: number): Promise<void> {
    api({
      url: `/winners/${id}`,
      method: 'delete',
    });
    await this.load();
  }

  public async getSingle(id: number): Promise<Winner | null> {
    const result = await api<Dictionary>({
      url: `/winners/${id}`,
      method: 'get',
    });

    return result.code === 404 ? null : new Winner(result.response as Dictionary);
  }
}
