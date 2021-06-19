import { Headline } from '../components/headline';
import { NavBar } from '../components/navbar';
import { Winners } from '../models/Winners';
import { Wrapper } from '../components/wrapper';
import Page from './Page';
import { Button } from '../components/button';
import { Car } from '../components/cars/car';

export class WinnersPage extends Page {
  public static urlPattern = 'winners';

  private winners = new Winners();

  private readonly navBar: NavBar;

  private readonly wrapper = new Wrapper();

  private readonly nextBtn = new Button('Next', 'next');

  private readonly prevBtn = new Button('Prev', 'prev');

  constructor(rootElement: HTMLElement) {
    super(rootElement);
    this.navBar = new NavBar();
    this.appendComponents();
    this.render();
  }

  appendComponents() {
    this.rootElement.appendChild(this.navBar.element);
    localStorage.setItem('winners page number', (this.winners.page).toString());
    this.rootElement.appendChild(this.wrapper.element);
    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('pagination-wrapper');
    paginationWrapper.appendChild(this.prevBtn.element);
    paginationWrapper.appendChild(this.nextBtn.element);
    this.rootElement.appendChild(paginationWrapper);
    localStorage.setItem('page number', (this.winners.page).toString());
    this.nextBtn.element.addEventListener('click', this.next.bind(this));
    this.prevBtn.element.addEventListener('click', this.prev.bind(this));
  }

  async render() {
    this.wrapper.element.innerHTML = '';

    const winnersObj = (this.winners.loadPage(this.winners.page));
    for (const winner of await winnersObj) {
      const winnerWrapper = document.createElement('div');
      winnerWrapper.classList.add('winner-wrapper');
      this.wrapper.element.appendChild(winnerWrapper);
      console.log(winner);

      const carImage = new Car(winner.name, winner.color);
      carImage.element.style.position = 'relative';

      winnerWrapper.appendChild(carImage.element);
      winnerWrapper.append(`${winner.id.toString()} ${winner.wins.toString()} ${(winner.time).toFixed(2).toString()} ${winner.name}`);
    }
    this.wrapper.element.prepend(new Headline(`Page #${this.winners.page}`).element);
    this.wrapper.element.prepend(new Headline(`Winners (${this.winners.total})`).element);
  }

  private saveCurrentPage() {
    localStorage.setItem('winners page number', this.winners.page.toString());
  }

  public async next() {
    if (this.winners.page === Math.ceil(this.winners.total / this.winners.pageSize)) {
      return;
    }
    await this.winners.next();
    await this.render();
    this.saveCurrentPage();
  }

  public async prev() {
    if (this.winners.page === 1) {
      return;
    }
    await this.winners.prev();
    await this.render();
    this.saveCurrentPage();
  }
}
