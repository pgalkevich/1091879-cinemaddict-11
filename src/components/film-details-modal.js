import {MONTH_NAMES} from "../constants";
import {createElement} from "../utilities";

const formatReleaseDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let releaseDate = `${day} ${MONTH_NAMES[month]} ${year}`;

  return releaseDate;
};
const commentReactionToEmojiMap = {
  4: `./images/emoji/smile.png`,
  3: `./images/emoji/sleeping.png`,
  2: `./images/emoji/puke.png`,
  1: `/images/emoji/angry.png`
};
const formatCommentDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const createCommentTemplate = (comment) => {
  const {name, date, reaction, message} = comment;
  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="${commentReactionToEmojiMap[reaction]}" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">${message}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${name}</span>
          <span class="film-details__comment-day">${formatCommentDate(date)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};

const createGenresTemplate = (genre) => {
  return `<span class="film-details__genre">${genre}</span>`;
};

const createFilmDetailsTableRow = (prop, value) => {
  return (
    `<tr class="film-details__row">
       <td class="film-details__term">${prop}</td>
       <td class="film-details__cell">${value}</td>
     </tr>`
  );
};

const createEmojiListItemTemplate = (value) => {
  return (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${value}" value="${value}">
     <label class="film-details__emoji-label" for="emoji-${value}">
       <img src="./images/emoji/${value}.png" width="30" height="30" alt="emoji">
     </label>`
  );
};

const createDetailsControlTemplate = (controlName) => {
  let label = ``;
  switch (controlName) {
    case `watchlist`:
      label = `Add to watchlist`;
      break;
    case `watched`:
      label = `Already watched`;
      break;
    case `favorites`:
      label = `Add to favorites`;
      break;
  }
  return (
    `<input type="checkbox" class="film-details__control-input visually-hidden" id="${controlName}" name="${controlName}">
    <label for="${controlName}" class="film-details__control-label film-details__control-label--${controlName}">${label}</label>`

  );
};

const createFilmDetailsModalTemplate = (filmObj) => {
  const {title, rating, date, duration, genres, posterLink, description, comments, ageLimit, director, writers, actors, country} = filmObj;

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${posterLink}" alt="">

              <p class="film-details__age">${ageLimit}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                ${createFilmDetailsTableRow(`Director`, director)}
                ${createFilmDetailsTableRow(`Writers`, writers.map((item) => createGenresTemplate(item)).join(`\n`))}
                ${createFilmDetailsTableRow(`Actors`, actors.map((item) => createGenresTemplate(item)).join(`\n`))}
                ${createFilmDetailsTableRow(`Release Date`, formatReleaseDate(date))}
                ${createFilmDetailsTableRow(`Runtime`, duration)}
                ${createFilmDetailsTableRow(`Country`, country)}
                ${createFilmDetailsTableRow(`Genres`, genres.map((item) => createGenresTemplate(item)).join(`\n`))}
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            ${createDetailsControlTemplate(`watchlist`)}
            ${createDetailsControlTemplate(`watched`)}
            ${createDetailsControlTemplate(`favorites`)}
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

            <ul class="film-details__comments-list">
                ${comments.map((comment) => createCommentTemplate(comment)).join(`\n`)}
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                ${createEmojiListItemTemplate(`smile`)}
                ${createEmojiListItemTemplate(`sleeping`)}
                ${createEmojiListItemTemplate(`puke`)}
                ${createEmojiListItemTemplate(`angry`)}
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

export default class FilmDetailsCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsModalTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
