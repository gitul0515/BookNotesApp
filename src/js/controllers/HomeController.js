import HomeSearchTabView from "../views/HomeSearchTabView.js";
import HomeSearchListView from "../views/HomeSearchListView.js";
import fetchBookData from "../service/api-search.js";
import BookModel from "../models/BookModel.js";

export default {
  init() {
    HomeSearchTabView.setup(document.querySelector('.home__search-tab'))
      .on('@click', () => this.onClickTab());
    HomeSearchListView.setup(document.querySelector('.home__search-page--list'))
      .on('@submit', e => this.onSearch(e.detail.text))
      .on('@click', e => this.onClickItem(e.detail.bookData))
    // HomeSearchSaveView.setup(document.querySelector('.home__search-page--save'))
  },

  onClickTab() {
    HomeSearchListView.show();
  },

  async onSearch(query) {
    const data = await fetchBookData(query);
    HomeSearchListView.render(data.documents);
  },

  async onClickItem(newItem) {
    const result = await BookModel.add(newItem);
    console.log(result);
  }
}
