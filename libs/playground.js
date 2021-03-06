const containerSettings = {
  display: 'block',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(195, 193, 193)',
};

const itemSettings = {
  padding: '5px',
  margin: '5px',
  'min-width': '40px',
  'min-height': '40px',
  backgroundColor: 'rgb(53, 47, 122)',
};

export const createFlexItem = (localSettings, itemsDefaultClasses) => {
  const mergedSettings = { ...itemSettings, ...localSettings };
  const item = document.createElement('div');
  item.classList.add('flex-item');
  for (const setting in mergedSettings) {
    item.style[setting] = mergedSettings[setting];
  }
  itemsDefaultClasses.forEach((defaultClass) => item.classList.add(defaultClass));
  // if (typeof descripteion === 'number') item.textContent = description;
  return item;
};

export const createFlexContainer = (localSettings) => {
  const mergedSettings = { ...containerSettings, ...localSettings };
  const container = document.createElement('div');
  container.classList.add('flex-container');
  for (const setting in mergedSettings) {
    container.style[setting] = mergedSettings[setting];
  }
  return container;
};

export const createHeader = (level) => {
  level = Math.max(Math.min(level, 6), 1);
  const header = document.createElement(`h${level}`);
  return header;
};

export const createPlayground = (settings) => {
  const {
    flexProperty,
    numberOfItems = 1,
    defaultValue,
    itemsDefaultClasses = [],
    containerSettings = {},
    itemSettings = {},
  } = settings;

  const playground = document.createElement('div');
  playground.className = 'playground';

  const container = createFlexContainer(containerSettings);
  container.style[flexProperty] = defaultValue;

  for (let index = 0; index < numberOfItems; index += 1) {
    const flexItem = createFlexItem(itemSettings, itemsDefaultClasses);
    container.appendChild(flexItem);
  }

  playground.appendChild(container);
  return playground;
};

export const getCSSRules = (str) => {
  const result = {};
  if (str === '') return result;
  const lines = str.split('\n');
  let validLines = lines.filter((line) => line.includes(':'));
  validLines = validLines.map((line) => {
    let pairs = line.split(':');
    pairs = pairs.map((prop) => prop.trim().replaceAll(';', ''));
    return pairs;
  });
  return validLines.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, result);
};

export const applyCSSRules = (elem, rules) => {
  Object.entries(rules).forEach(([prop, value]) => {
    elem.style[prop] = value;
  });
};

export const createExercise = (settings) => {
  const exercise = document.createElement('div');
  exercise.classList.add('exercise');

  const header = createHeader(2);
  header.className = 'playground-header';
  header.textContent = settings.title;
  exercise.appendChild(header);

  const playgroundWrapper = document.createElement('div');
  playgroundWrapper.classList.add('playground-wrapper');

  let playground = createPlayground(settings);
  const form = document.createElement('form');

  const cssInput = document.createElement('textarea');
  cssInput.placeholder = 'Coloque aqui sua resposta. Uma regra por linha.\n\npropriedade: valor;\npropriedade: valor;\npropriedade: valor;';

  const { defaultAnswerValue } = settings;
  if (defaultAnswerValue) {
    const flexContainer = playground.querySelector('.flex-container');
    cssInput.textContent = defaultAnswerValue;
    applyCSSRules(flexContainer, getCSSRules(defaultAnswerValue));
  }

  cssInput.addEventListener('input', () => {
    const newPlayground = createPlayground(settings);
    const flexContainer = newPlayground.querySelector('.flex-container');
    const rules = getCSSRules(cssInput.value);
    applyCSSRules(flexContainer, { ...containerSettings, ...settings.containerSettings, ...rules });
    playgroundWrapper.replaceChild(newPlayground, playground);
    playground = newPlayground;
  });
  form.appendChild(cssInput);

  playgroundWrapper.appendChild(form);
  playgroundWrapper.appendChild(playground);
  exercise.appendChild(header);
  exercise.appendChild(playgroundWrapper);
  return exercise;
};

export const createExerciseFromList = (container, arr) => {
  arr.forEach((setting) => {
    container.appendChild(createExercise(setting));
  });
};

export default {
  createExercise,
};
