import BookPageView from "../views/BookPageView.js";
import BookListView from "../views/BookListView.js";
import ModalView from "../views/ModalView.js";
import BookModel from "../models/BookModel.js";

export default {
  init() {
    BookPageView
      .on('@search', e => this.onSearch(e.detail.value))
      .on('@sort', () => this.onSort());
    BookListView
      .setup(document.querySelector('.book-list'));
    this.fetchBookList();
    console.log(ModalView.element);
    // ModalView
    //   .on('@click', e => this.onModalClick(e.detail.target))
  },

  async fetchBookList() {
    const data = await BookModel.list();
    BookListView.render(data);
  },

  async onSearch(value) {
    const data = await BookModel.search(value);
    BookListView.render(data);
  },

  onSort() {
    ModalView.show();
  },

  onModalClick(target) {
    console.log(target);
  }
}
