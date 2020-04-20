const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getRandomListFromArray = (array) => {
  const localArr = array.slice();
  const resultArr = [];
  const count = getRandomIntegerNumber(0, localArr.length);

  for (let i = 0; i <= count; i++) {
    const genre = localArr.splice(getRandomIntegerNumber(0, localArr.length), 1);
    resultArr.push(genre);
  }
  return resultArr;
};

const createElement = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container.firstChild;
};

const renderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, element, position = `beforeend`) => {
  switch (position) {
    case renderPosition.BEFOREEND:
      container.append(element);
      break;
    case renderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
  }
};
export {
  getRandomArrayItem,
  getRandomIntegerNumber,
  getRandomDate,
  getRandomListFromArray,
  createElement,
  renderPosition
};
