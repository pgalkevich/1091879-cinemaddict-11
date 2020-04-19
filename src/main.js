import FiltersMenuComponent from './components/menu';
import SortComponent from './components/sort';
import FooterStatComponent from './components/footer';
import FilmsBoardComponent from './components/films-board';
import FilmDetailsComponent from './components/film-details-modal';
import ShowMoreButtonComponent from "./components/show-more-button";
import FilmCardComponent from "./components/film-card";
import FilmsListComponent from "./components/films-list";
import FilmsExtraComponent from "./components/films-extra";
import {generateFilms} from "./mock/film";
import {generateFilters} from "./mock/menu";
import {render} from "./utilities";
import NoFilmsComponent from "./components/no-films";


const FILMS_COUNT = 22;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const mainElement = document.querySelector(`.main`);
const filters = generateFilters();
const filmsObjs = generateFilms(FILMS_COUNT);

// рендер фильтров и сортировки
render(mainElement, new FiltersMenuComponent(filters).getElement());
render(mainElement, new SortComponent().getElement());

// функция отрисовки карточки фильма с хендлерами
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

    const closeDetailsBtn = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
    closeDetailsBtn.addEventListener(`click`, closeFilmDetailsModal);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const filmComponent = new FilmCardComponent(film);
  const filmPoster = filmComponent.getElement().querySelector(`.film-card__poster`);
  filmPoster.addEventListener(`click`, showFilmDetails);

  render(filmListElement, filmComponent.getElement());
};

const renderBoard = (boardComponent, films) => {
  if (films.length < 1) {
    render(boardComponent.getElement(), new NoFilmsComponent().getElement());
    return;
  }

  const FilmsList = new FilmsListComponent();
  const FilmsTopRated = new FilmsExtraComponent(`Top Rated`);
  const FilmsMostCommented = new FilmsExtraComponent(`Most Commented`);
  render(boardComponent.getElement(), FilmsList.getElement());
  render(boardComponent.getElement(), FilmsTopRated.getElement());
  render(boardComponent.getElement(), FilmsMostCommented.getElement());

  const filmsListContainer = FilmsList.getElement().querySelector(`.films-list__container`);
  let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

  films.slice(0, showingFilmsCount)
    .forEach((film) => renderFilm(filmsListContainer, film));

  const showMoreButton = new ShowMoreButtonComponent();
  render(FilmsList.getElement(), showMoreButton.getElement());
  showMoreButton.getElement().addEventListener(`click`, () => {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

    films.slice(prevFilmsCount, showingFilmsCount)
      .forEach((film) => renderFilm(filmsListContainer, film));

    if (showingFilmsCount >= films.length) {
      showMoreButton.getElement().remove();
      showMoreButton.removeElement();
    }
  });

  renderFilm(FilmsTopRated.getElement().querySelector(`.films-list__container`), films[0]);
  renderFilm(FilmsTopRated.getElement().querySelector(`.films-list__container`), films[1]);
  renderFilm(FilmsMostCommented.getElement().querySelector(`.films-list__container`), films[3]);
  renderFilm(FilmsMostCommented.getElement().querySelector(`.films-list__container`), films[4]);

};

// рендер доски (контейнера для списка фильмов и экстра секций (top rated & most commented))
const FilmsBoard = new FilmsBoardComponent();
render(mainElement, FilmsBoard.getElement());
renderBoard(FilmsBoard, filmsObjs);

render(document.querySelector(`.footer__statistics`), new FooterStatComponent(FILMS_COUNT).getElement());

