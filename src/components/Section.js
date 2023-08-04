export default class Section {
  constructor({ items, renderer }, cardSection) {
    this._items = items;
    this._renderer = renderer;
    this._cardSection = cardSection;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._cardSection.prepend(element);
  }
}