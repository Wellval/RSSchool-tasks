import type { GaragePage } from '../containers/Garage';
import { BaseComponent } from './base-component';

export class Overlay extends BaseComponent {
  constructor(private readonly garagePage: GaragePage) {
    super('div', ['overlay']);
    this.element.addEventListener('click', () => {
      this.garagePage.rootElement.removeChild(this.element);
    });
  }
}
