import NavigationView from '../views/NavigationView.js';
import HomePageView from '../views/HomePageView.js';
import HomeSearchPageView from '../views/HomeSearchPageView.js';
import NotePageView from '../views/NotePageView.js';
import BookPageView from '../views/BookPageView.js';
import SettingView from '../views/SettingView.js';

import HomeController from './HomeController.js';
import BookController from './BookController.js';
import NoteController from './NoteController.js';
import SettingController from './SettingController.js';
import BookDetailPageView from '../views/BookDetailPageView.js';

const page = document.getElementById('page');
const navigation = document.getElementById('navigation');

export default {
  init() {
    NavigationView.setup(navigation) //
      .on('@click', (e) => this.onClick(e.detail.page));

    window.addEventListener('popstate', () => this.route());
    this.route();
  },

  route() {
    const path = window.location.pathname;

    if (path === '/' || path === '/home') {
      HomePageView.setup(page);
      HomeController.init();
      NavigationView.show();
      return;
    }
    if (path === '/home/search') {
      HomeSearchPageView.render(page);
      NavigationView.hide();
      return;
    }
    if (path === '/book') {
      BookPageView.setup(page);
      BookController.init();
      NavigationView.show();
      return;
    }
    if (path.indexOf('/book/') === 0) {
      BookDetailPageView.render(page);
      NavigationView.hide();
      return;
    }
    if (path === '/note') {
      NotePageView.setup(page);
      NoteController.init();
      return;
    }
    if (path === '/setting') {
      SettingView.setup(page);
      SettingController.init();
      return;
    }
    throw new Error('invalid page');
  },

  onClick(page) {
    history.pushState(null, null, page);
    this.route();
  },
};
