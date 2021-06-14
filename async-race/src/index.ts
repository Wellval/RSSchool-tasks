import { Router } from './routing';
import './styles/index.scss';

const router = new Router();

window.onload = () => router.resolveLocation();
window.onpopstate = () => router.resolveLocation();