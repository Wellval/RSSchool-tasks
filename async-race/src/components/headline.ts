import { BaseComponent } from './base-component';

export class Headline extends BaseComponent {
  constructor(private readonly innerText: string) {
    super('h2');
    this.element.innerText = innerText;
  }
}
