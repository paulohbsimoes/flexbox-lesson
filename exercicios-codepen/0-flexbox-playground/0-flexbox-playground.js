const app = document.querySelector('#app');

const createRadio = (name, value) => {
  const input = document.createElement('input');
  input.type = 'radio';
  input.id = `${name}-${value}`;
  input.name = `${name}-radios`;
  input.value = value;
  return input;
};

const createLabel = (forId, description) => {
  const label = document.createElement('label');
  label.htmlFor = forId;
  label.textContent = description;
  return label;
};

const createInputGroup = (name, value, defaultValue) => {
  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';
  const radio = createRadio(name, value);
  if (value === defaultValue) radio.checked = true;
  inputGroup.appendChild(radio);
  inputGroup.appendChild(createLabel(`${name}-${value}`, value));
  return inputGroup;
};

const createForm = (name, values, defaultValue) => {
  const form = document.createElement('form');
  form.id = name;
  values.forEach((value) => {
    form.appendChild(createInputGroup(name, value, defaultValue));
  });
  return form;
};

const createFlexItem = ({ description, itemsDefaultClasses }) => {
  const item = document.createElement('div');
  item.classList.add('flex-item');
  itemsDefaultClasses.forEach((defaultClass) => item.classList.add(defaultClass));
  if (typeof description === 'number') item.textContent = description;
  return item;
};

const containerSettings = {
  display: 'flex',
  'flex-wrap': 'wrap',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(195, 193, 193)',
  'align-items': 'flex-start',
};

const createFlexContainer = (localSettings) => {
  const mergedSettings = { ...containerSettings, ...localSettings };
  const container = document.createElement('div');
  container.classList.add('flex-container');
  for (const setting in mergedSettings) {
    container.style[setting] = mergedSettings[setting];
  }
  return container;
};

const createHeader = (level) => {
  level = Math.max(Math.min(level, 6), 1);
  const header = document.createElement(`h${level}`);
  return header;
};

const createPlayground = (settings) => {
  const {
    flexProperty,
    properyValues,
    numberOfItems = 1,
    defaultValue,
    itemsDefaultClasses = [],
    containerSettings = {},
  } = settings;

  const playground = document.createElement('div');
  playground.className = 'playground';

  const header = createHeader(2);
  header.className = 'playground-header';
  header.textContent = flexProperty;
  playground.appendChild(header);

  const form = createForm(flexProperty, properyValues, defaultValue);
  playground.appendChild(form);

  const container = createFlexContainer(containerSettings);
  container.style[flexProperty] = defaultValue;
  for (let index = 0; index < numberOfItems; index += 1) {
    const flexItem = createFlexItem({ description: index + 1, itemsDefaultClasses });
    container.appendChild(flexItem);
  }

  const radios = form.querySelectorAll('[type=radio]');
  radios.forEach((radio) => radio.addEventListener('change', (event) => {
    container.style[flexProperty] = event.target.value;
  }));

  playground.appendChild(container);
  return playground;
};

const settings = [
  {
    flexProperty: 'flex-direction',
    properyValues: ['row', 'row-reverse', 'column', 'column-reverse'],
    defaultValue: 'row',
    numberOfItems: 3,
    containerSettings: {
      'align-items': 'flex-start',
    },
  },
  {
    flexProperty: 'flex-wrap',
    properyValues: ['nowrap', 'wrap', 'wrap-reverse'],
    defaultValue: 'wrap',
    numberOfItems: 10,
    containerSettings: {
      'align-items': 'flex-start',
    },
  },
  {
    flexProperty: 'justify-content',
    properyValues: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    defaultValue: 'flex-start',
    numberOfItems: 3,
    containerSettings: {
      'align-items': 'flex-start',
    },
  },
  {
    flexProperty: 'align-items',
    properyValues: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    defaultValue: 'stretch',
    numberOfItems: 8,
    itemsDefaultClasses: ['evenElementsBiggerFont'],
  },
  {
    flexProperty: 'align-content',
    properyValues: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    defaultValue: 'flex-start',
    numberOfItems: 12,
    containerSettings: {
      'flex-wrap': 'wrap',
      'align-items': 'stretch',
    },
  },
];

settings.forEach((setting) => {
  app.appendChild(createPlayground(setting));
});
