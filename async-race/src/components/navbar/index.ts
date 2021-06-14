import { Router } from "../../routing";
import { BaseComponent } from "../base-component"
import { NavButton } from "./button";

export class NavBar extends BaseComponent {
    private readonly router: Router;

    constructor() {
        super('div', ['navbar']);
        this.router = new Router();
        const navBtns = [
            new NavButton('To Winners', 'winners'),
            new NavButton('To Garage', ''),
        ];
        for (let i = 0; i < navBtns.length; i++) {
            this.element.appendChild(navBtns[i].element);
        }
    }
}