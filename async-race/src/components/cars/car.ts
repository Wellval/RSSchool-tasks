import { BaseComponent } from '../base-component';

export class Car extends BaseComponent {
  constructor(name: string, color: string) {
    super('i', ['fas', 'fa-car-side']);
    this.element.style.color = color;
    this.moveCar.pause();
  }

  moveCar = this.element.animate([
    { left: '0%' },
    { left: 'calc(100% - 5rem)' },
  ], {
    duration: 1000,
    fill: 'forwards',
  });
}
