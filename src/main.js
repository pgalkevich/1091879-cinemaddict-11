import {createMenuTemplate} from './components/menu';
import {createSortTemplate} from './components/sort';
import {createFooterStatisticsTemplate} from './components/footer';
import {createFilmsSectionTemplate} from './components/film-section';
import {createFilmDetailsModalTemplate} from './components/film-details-modal';
import {createShowMoreBtnTemplate} from "./components/show-more-button";
import {createFilmCardTemplate} from "./components/film-card";
import {generateFilms} from "./mock/film";
import {generateFilters} from "./mock/menu";

const render = (parent, element, place = `beforeend`) => {
  parent.insertAdjacentHTML(place, element);
};

const FILMS_COUNT = 22;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const mainElement = document.querySelector(`.main`);
const filters = generateFilters();
render(mainElement, createMenuTemplate(filters));
render(mainElement, createSortTemplate());
render(mainElement, createFilmsSectionTemplate());

const filmsList = document.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);
render(filmsList, createShowMoreBtnTemplate());

const filmsObjs = generateFilms(FILMS_COUNT);
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

filmsObjs.slice(0, showingFilmsCount)
  .forEach((filmObj) => render(filmsListContainer, createFilmCardTemplate(filmObj)));

const showMoreBtn = document.querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

  filmsObjs.slice(prevFilmsCount, showingFilmsCount)
    .forEach((filmObj) => render(filmsListContainer, createFilmCardTemplate(filmObj)));

  if (showingFilmsCount >= filmsObjs.length) {
    showMoreBtn.remove();
  }
});

const footerStatContainer = document.querySelector(`.footer__statistics`);
render(footerStatContainer, createFooterStatisticsTemplate(FILMS_COUNT));

document.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`film-card__poster`)) {
    render(document.querySelector(`body`), createFilmDetailsModalTemplate(filmsObjs[0]));
  } else if (e.target.classList.contains(`film-details__close-btn`)) {
    document.querySelector(`.film-details`).remove();
  }
});

// console.log(filmsObjs);
