import AbstractComponent from "./abstract-component";

export default class FooterStat extends AbstractComponent {
  constructor(filmsCount) {
    super();
    this._filmsCount = filmsCount;
  }

  getTemplate() {
    return `<p>${this._filmsCount} movies inside</p>`;
  }
}
