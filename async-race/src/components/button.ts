import { BaseComponent } from './base-component';

export class Button extends BaseComponent {
  constructor(private readonly innerText: string, private readonly btnClass: string) {
    super('button', ['btn', btnClass]);
    this.element.innerText = innerText;
  }
}
