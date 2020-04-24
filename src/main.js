import FiltersMenuComponent from './components/menu';
import SortComponent from './components/sort';
import FooterStatComponent from './components/footer';
import PageController from "./controllers/page-controller";
import {generateFilms} from "./mock/film";
import {generateFilters} from "./mock/menu";
import {render} from "./utils/render";


const FILMS_COUNT = 22;


const mainElement = document.querySelector(`.main`);
const filters = generateFilters();
const filmsObjs = generateFilms(FILMS_COUNT);

render(mainElement, new FiltersMenuComponent(filters));
render(mainElement, new SortComponent());

new PageController(mainElement).render(filmsObjs);

render(document.querySelector(`.footer__statistics`), new FooterStatComponent(FILMS_COUNT));
