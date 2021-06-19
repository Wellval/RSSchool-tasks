import Page from './containers/Page';

export class Router {
  public static instance: Router | null = null;

  protected rootPath: string;

  constructor(protected pages: (typeof Page)[]) {
    if (!Router.instance) {
      Router.instance = this;
    }
    this.rootPath = window.location.href.replace('index.html', '');
    return Router.instance;
  }

  navigateTo = (pathname: string) => {
    window.history.pushState({}, pathname as string,
      this.rootPath.endsWith('#')
        ? this.rootPath.substr(0, this.rootPath.length - 2)
        : this.rootPath
            + pathname);
  };

  resolveLocation = () => {
    const rootElement = document.getElementById('app')!;
    rootElement.innerHTML = '';
    const url = window.location.href.replace(this.rootPath, '');

    for (const PageItem of this.pages) {
      if (url.includes(PageItem.urlPattern)) {
        new PageItem(rootElement);
        break;
      }
    }
  };
}
