import {createMenuTemplate} from './components/menu';
import {createSortTemplate} from './components/sort';
import {createFooterStatisticsTemplate} from './components/footer';
import {createFilmsSectionTemplate} from './components/film-section';
import {createFilmDetailsModalTemplate} from './components/film-deteils-modal';

const render = (parent, element, place = `beforeend`) => {
  parent.insertAdjacentHTML(place, element);
};

const mainElement = document.querySelector(`.main`);
render(mainElement, createMenuTemplate());
render(mainElement, createSortTemplate());
render(mainElement, createFilmsSectionTemplate());

const footerStatContainer = document.querySelector(`.footer__statistics`);
render(footerStatContainer, createFooterStatisticsTemplate(130291));

const cards = document.querySelectorAll(`.film-card`);
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener(`click`, () => {
    render(document.querySelector(`body`), createFilmDetailsModalTemplate());
  });
}

