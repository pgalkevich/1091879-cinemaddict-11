import {createFilmCardTemplate} from "./film-card";
import {createShowMoreBtnTemplate} from "./show-more-button";
import {filmsData} from "../data/films-data";

const FILM_COUNT = 5;

export const createFilmsSectionTemplate = () => {
  let filmCardsHTML = ``;
  for (let i = 0; i < FILM_COUNT; i++) {
    filmCardsHTML += createFilmCardTemplate(filmsData[i]);
  }
  return (
    `<section class="films">
      <section class="films-list">
        <div class="films-list__container">
            ${filmCardsHTML}
        </div>
        ${createShowMoreBtnTemplate()}
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container">
            ${createFilmCardTemplate(filmsData[5])}
            ${createFilmCardTemplate(filmsData[6])}
        </div>
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
          ${createFilmCardTemplate(filmsData[7])}
          ${createFilmCardTemplate(filmsData[8])}
        </div>
      </section>
    </section>`
  );
};
