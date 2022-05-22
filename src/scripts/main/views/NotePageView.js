import View from './View.js';
import BM from '../models/BookModel.js';

const NotePageView = Object.create(View);

NotePageView.setup = function (element) {
  this.init(element);
  this.render();
};

NotePageView.render = function () {
  const html = this.getHtml();
  NotePageView.replaceChildren(html);
};

NotePageView.getHtml = function () {
  return /* html */ `
    <header class="header">
      <h1 class="header__title">나의 노트</h1>
      <h3 class="header__message">${BM.numberOfNotes}개의 노트를 작성하셨군요!</h3>
    </header>
    <div class="content content--note">
      <div class="note__tab-container">
        <a class="note__tab-item note__tab-item--random" href="">
          <h2>랜덤 노트</h2>
          <h3>노트를 읽으세요!</h3>
        </a>
        <a class="note__tab-item note__tab-item--favorite" href="">
          <h2>좋아하는 노트</h2>
          <h3>베스트 컬렉션</h3>
        </a>
      </div>
      <ul class="note-list"></ul>
    </div>
  `;
};

export default NotePageView;
