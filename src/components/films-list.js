import {createElement} from "../utilities";

const createFilmsListTemplate = () => {
  return (
    `<section class="films-list">
      <div class="films-list__container">
      </div>
    </section>`
  );
};

export default class FilmsList {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTemplate(this._film);
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
