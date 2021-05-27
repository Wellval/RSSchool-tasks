import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AboutField } from './components/about-field/about-field';

export class AboutPage {
    private readonly header: Header;
    private readonly footer: Footer;
    private readonly aboutField: AboutField;

    constructor(private readonly rootElement: HTMLElement) {
        this.header = new Header();
        this.footer = new Footer();
        this.aboutField = new AboutField();
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.aboutField.element);
        this.rootElement.appendChild(this.footer.element);
    }
}