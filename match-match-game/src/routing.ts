import { AboutPage } from './about';
import { App } from './app';
import { ScorePage } from './score';
import { SettingsPage } from './settings';

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
        window.history.pushState({}, pathname as string, this.rootPath + pathname);
    };

    resolveLocation = () => {
        const rootElement = document.getElementById('app')!;
        rootElement.innerHTML = '';
        const pages = [AboutPage, SettingsPage, ScorePage, App];
        const url = window.location.href.replace(this.rootPath, '');

        for (let i = 0; i < pages.length; i++) {
            if (url.includes(pages[i].urlPattern)) {
                new pages[i](rootElement);
                break;
            }
        }
    };
}
