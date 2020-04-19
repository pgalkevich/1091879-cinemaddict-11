import {createElement} from "../utilities";

const createFilterItemTemplate = (filter, isActive) => {
  const {name, count} = filter;
  return (
    `<a
      href="#watchlist"
      class="${isActive ? `main-navigation__item main-navigation__item--active` : `main-navigation__item`}"
    >
        ${name}
        <span class="main-navigation__item-count">
            ${count}
        </span>
    </a>`
  );
};

const createMenuTemplate = (filters) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filters.map((filter, i) => createFilterItemTemplate(filter, i === 0)).join(`\n`)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
     </nav>`
  );
};

export default class FiltersMenu {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
