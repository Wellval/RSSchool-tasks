import './styles.scss';
import { App } from './app';
import { AboutPage } from './about';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  new AboutPage(appElement);
};