import { AboutPage } from './about';
import { App } from './app';
import { ScorePage } from './score';

export class Router {
    public static instance: Router | null = null;

    constructor() {
        if (!Router.instance) {
            Router.instance = this;
        }
        return Router.instance;
    }

    navigateTo = (pathname: string) => {
        window.history.pushState({}, pathname as any, window.location.origin + pathname);
    };

    resolveLocation = () => {
        const rootElement = document.getElementById('app')!;
        rootElement.innerHTML = '';
        switch (window.location.pathname) {
            case '/':
                new App(rootElement).start();
                break;
            case '/about':
                new AboutPage(rootElement);
                break;
            case '/score':
                new ScorePage(rootElement);
                break;
            case '/settings':
                new ScorePage(rootElement);
                break;
            default:
                // def
                break;
        }
    };
}
