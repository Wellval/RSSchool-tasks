export default class Page {
  static urlPattern: string;

  public rootElement: HTMLElement;

  constructor(root: HTMLElement) {
    this.rootElement = root;
  }
}
