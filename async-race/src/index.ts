import { Router } from './routing';
import './styles/index.scss';
import { GaragePage } from './containers/Garage';
import { WinnersPage } from './containers/Winners';

const router = new Router([WinnersPage, GaragePage]);

window.onload = () => router.resolveLocation();
window.onpopstate = () => router.resolveLocation();
