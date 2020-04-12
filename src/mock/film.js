import {getRandomArrayItem, getRandomIntegerNumber, getRandomDate, getRandomListFromArray} from "../utilities";
import {GENRES, COUNTRIES, DIRECTORS, WRITERS, ACTORS} from "../constants";

const filmTitles = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `Made for Each Other`
];
const posterLinks = [
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/made-for-each-other.png`
];

const commentatorNames = [
  `Tim Macoveev`,
  `John Doe`,
  `Mike Strange`,
  `Oliver Stone`,
  `Jimmy Gun`
];

const getRandomRating = () => {
  return (Math.random() * 10).toFixed(1);
};
const formatDurationDisplay = (duration) => {
  const minutes = duration % 60;
  const hours = Math.trunc(duration / 60);
  const format = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return format;
};
const getDescription = () => {
  const strArray = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`.`);
  const strCount = getRandomIntegerNumber(1, 5);

  let description = ``;
  for (let i = 0; i <= strCount; i++) {
    description += getRandomArrayItem(strArray) + `. `;
  }

  return description;
};
const getComments = (count) => {
  const commentsArray = [];
  for (let i = 0; i < count; i++) {
    const commentObj = {
      name: commentatorNames[getRandomIntegerNumber(0, commentatorNames.length)],
      date: getRandomDate(new Date(2012, 0, 1), new Date()),
      reaction: getRandomIntegerNumber(1, 4),
      message: getDescription()
    };

    commentsArray.push(commentObj);
  }

  return commentsArray;
};

const generateFilm = () => {
  return {
    title: getRandomArrayItem(filmTitles),
    rating: getRandomRating(),
    date: getRandomDate(new Date(1910, 0, 1), new Date()),
    duration: formatDurationDisplay(getRandomIntegerNumber(30, 240)),
    genres: getRandomListFromArray(GENRES),
    posterLink: getRandomArrayItem(posterLinks),
    description: getDescription(),
    comments: getComments(getRandomIntegerNumber(0, 99)),
    ageLimit: getRandomIntegerNumber(0, 18),
    director: getRandomArrayItem(DIRECTORS),
    writers: getRandomListFromArray(WRITERS),
    actors: getRandomListFromArray(ACTORS),
    country: getRandomArrayItem(COUNTRIES)
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

export {generateFilm, generateFilms};
