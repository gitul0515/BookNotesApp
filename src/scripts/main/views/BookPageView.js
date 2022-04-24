import View from './View.js';

const BookPageView = Object.create(View);

BookPageView.setup = function(element) {
  this.init(element);
  this.render();
  this.bindElement();
  this.bindEvent();
}

BookPageView.render = function() {
  const html = this.getHtml();
  const element = this.createElement(html);
  this.element.replaceChildren(element);
};

BookPageView.getHtml = function() {
  return `
    <header class="header">
      <h1 class="header__title">나의 서재</h1>
      <h3 class="header__message">20권의 책을 다 읽으셨어요!</h3>
    </header>
    <div class="content content--book">
      <form class="search-form" action="" method="get">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input 
          class="search-form__input"
          type="text" 
          placeholder="등록한 책을 검색해보세요"
          pattern=".{2,}" 
          title="두 글자 이상 입력하세요"
        >
      </form>
      <button class="button--sort">제목 순서로</button>
      <ul class="book-list"></ul>
    </div>
    <div id="modal">
      <div class="modal__content">hello</div>
    </div>
  `;
};

BookPageView.bindElement = function() {
  this.form = this.element.querySelector('.search-form');
  this.input = this.element.querySelector('.search-form__input');
  this.button = this.element.querySelector('.button--sort');
};

BookPageView.bindEvent = function() {
  this.form.addEventListener('submit', e => this.onSearch(e));
  this.button.addEventListener('click', e => this.onClick(e));
};

BookPageView.onSearch = function(e) {
  e.preventDefault();
  const { value } = this.input;
  this.emit('@search', { value });
  this.input.value = '';
};

BookPageView.onClick = function(e) {
  this.emit('@sort');
}

export default BookPageView;