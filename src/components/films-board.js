// контейнер для списка и секций Top rated & Most commented
import AbstractComponent from "./abstract-component";

export default class FilmsBoard extends AbstractComponent {
  getTemplate() {
    return `<section class="films"></section>`;
  }
}
