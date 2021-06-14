import { GaragePage } from './containers/Garage';
import { WinnersPage } from './containers/Winners';

export class Router {
    public static instance: Router | null = null;

    protected rootPath: string;

    constructor() {
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
        const pages = [WinnersPage, GaragePage];
        const url = window.location.href.replace(this.rootPath, '');

        for (let i = 0; i < pages.length; i++) {
            if (url.includes(pages[i].urlPattern)) {
                new pages[i](rootElement);
                break;
            }
        }
    };
}