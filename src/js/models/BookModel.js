export default {
  data: [
    {
      title: "사피엔스",
      authors: ['유발 하라리'],
      publisher: "김영사",
      datetime: "2015-11-24T00:00:00.000+09:00",
      isbn: "8934972467 9788934972464",
      thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F521598%3Ftimestamp%3D20220411162844"
    },
  ],

  list(query) {
    // const searchResult = this.search(query);
    return new Promise(res => {
      setTimeout(()=> {
        res(this.data);
      }, 200);
    })
  },

  // search(query) {
  //   return data.filter(item => item.name.includes(query));
  // }

  add(newItem) {
    return new Promise(res => {
      setTimeout(() => {
        this.data = [...this.data, newItem];
        res(this.data);
      }, 200);
    });
  }
}
