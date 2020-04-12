import {createFilmCardTemplate} from "./film-card";
import {createShowMoreBtnTemplate} from "./show-more-button";
import {generateFilm} from "../mock/film";

const FILM_COUNT = 5;

export const createFilmsSectionTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <div class="films-list__container">
        </div>
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container">
            ${createFilmCardTemplate(generateFilm())}
            ${createFilmCardTemplate(generateFilm())}
        </div>
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
          ${createFilmCardTemplate(generateFilm())}
          ${createFilmCardTemplate(generateFilm())}
        </div>
      </section>
    </section>`
  );
};
