import AbstractComponent from "./abstract-component";

export default class NoFilms extends AbstractComponent {
  getTemplate() {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`;
  }
}
