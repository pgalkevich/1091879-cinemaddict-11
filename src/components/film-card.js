export const createFilmCardTemplate = (filmObj) => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${filmObj.title}</h3>
      <p class="film-card__rating">${filmObj.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmObj.year}</span>
        <span class="film-card__duration">${filmObj.duration}</span>
        <span class="film-card__genre">${filmObj.genre}</span>
      </p>
      <img src="${filmObj.posterLink}" alt="" class="film-card__poster">
      <p class="film-card__description">${filmObj.description}</p>
      <a class="film-card__comments">${filmObj.comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};
