export default class Section {
    constructor({ items, renderer}) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(".cards__list");
    }
  
    renderItems() {
      this._items.forEach((item) => {
        this._renderer(item);
      });
    }
  
    addItem(item) {
      this._container.prepend(item);
    }
  }
  