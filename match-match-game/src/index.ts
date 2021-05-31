import './styles.scss';
import { Router } from './routing';

const router = new Router();

window.onload = () => router.resolveLocation();
window.onpopstate = () => router.resolveLocation();
