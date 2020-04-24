import {remove, render} from "../utils/render";
import FilmDetailsComponent from "../components/film-details-modal";
import FilmCardComponent from "../components/film-card";
import NoFilmsComponent from "../components/no-films";
import FilmsListComponent from "../components/films-list";
import FilmsExtraComponent from "../components/films-extra";
import ShowMoreButtonComponent from "../components/show-more-button";
import FilmsBoardComponent from "../components/films-board";


const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const renderFilm = (filmListElement, film) => {
  const closeFilmDetailsModal = () => {
    document.querySelector(`body`).removeChild(document.querySelector(`.film-details`));
  };

  const showFilmDetails = () => {
    const onEscKeyDown = (evt) => {
      const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
      if (isEscKey) {
        closeFilmDetailsModal();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const filmDetailsComponent = new FilmDetailsComponent(film);
    document.querySelector(`body`).appendChild(filmDetailsComponent.getElement());

    filmDetailsComponent.setEditBtnClickHandler(closeFilmDetailsModal);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const filmComponent = new FilmCardComponent(film);
  filmComponent.setPosterClickHandler(showFilmDetails);

  render(filmListElement, filmComponent);
};
const renderBoard = (boardComponent, films) => {
  if (films.length < 1) {
    render(boardComponent.getElement(), new NoFilmsComponent());
    return;
  }

  const FilmsList = new FilmsListComponent();
  const FilmsTopRated = new FilmsExtraComponent(`Top Rated`);
  const FilmsMostCommented = new FilmsExtraComponent(`Most Commented`);
  render(boardComponent.getElement(), FilmsList);
  render(boardComponent.getElement(), FilmsTopRated);
  render(boardComponent.getElement(), FilmsMostCommented);

  const filmsListContainer = FilmsList.getElement().querySelector(`.films-list__container`);
  let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

  films.slice(0, showingFilmsCount)
    .forEach((film) => renderFilm(filmsListContainer, film));

  const showMoreButton = new ShowMoreButtonComponent();
  render(FilmsList.getElement(), showMoreButton);
  showMoreButton.setClickHandler(() => {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

    films.slice(prevFilmsCount, showingFilmsCount)
      .forEach((film) => renderFilm(filmsListContainer, film));

    if (showingFilmsCount >= films.length) {
      remove(showMoreButton);
    }
  });

  renderFilm(FilmsTopRated.getElement().querySelector(`.films-list__container`), films[0]);
  renderFilm(FilmsTopRated.getElement().querySelector(`.films-list__container`), films[1]);
  renderFilm(FilmsMostCommented.getElement().querySelector(`.films-list__container`), films[3]);
  renderFilm(FilmsMostCommented.getElement().querySelector(`.films-list__container`), films[4]);
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._filmsBoardComponent = new FilmsBoardComponent();
  }

  render(filmsObjs) {
    render(this._container, this._filmsBoardComponent);
    renderBoard(this._filmsBoardComponent, filmsObjs);
  }
}
