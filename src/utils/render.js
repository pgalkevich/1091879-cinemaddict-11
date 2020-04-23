const createElement = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container.firstChild;
};

const renderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, component, position = `beforeend`) => {
  switch (position) {
    case renderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case renderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export {
  createElement,
  render,
  remove
};
