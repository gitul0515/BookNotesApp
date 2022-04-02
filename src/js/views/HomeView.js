import View from './View.js';

const HomeView = Object.create(View);

HomeView.setup = function(element) {
  this.init(element);
  this.bindEvents();
  return this;
}

HomeView.bindEvents = function() {

};

HomeView.render = function() {
  const html = this.getHeaderHtml() + this.getContentHtml();
  const element = this.createElement(html);
  this.element.replaceChildren(element);
};

HomeView.getHeaderHtml = function() {
  return `<header class="header">
    <h1 class="header__title">북레스트</h1>
    <h3 class="header__message">책과 함께 휴식을 취하세요 :)</h3>
  </header>`;
};

HomeView.getContentHtml = function() {
  return `<div class="content">
    <article class="search-tab">
      <h2>책을 추가해 보세요.</h2>
      <h3>읽고 있는 책이 있나요?</h3>
    </article>
  </div>`;
};

HomeView.createElement = function(string) {
  const temp = document.createElement('template');
  temp.innerHTML = string;
  return temp.content;
}

export default HomeView;
