import AbstractComponent from "./abstract-component";

const createFilmsListTemplate = () => {
  return (
    `<section class="films-list">
      <div class="films-list__container">
      </div>
    </section>`
  );
};

export default class FilmsList extends AbstractComponent {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createFilmsListTemplate(this._film);
  }
}
