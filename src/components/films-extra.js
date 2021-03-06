import AbstractComponent from "./abstract-component";

const createFilmsExtraTemplate = (sectionName) => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">${sectionName}</h2>
        <div class="films-list__container">
        </div>
    </section>`
  );
};

export default class FilmsExtra extends AbstractComponent {
  constructor(name) {
    super();
    this._name = name;
  }

  getTemplate() {
    return createFilmsExtraTemplate(this._name);
  }
}
