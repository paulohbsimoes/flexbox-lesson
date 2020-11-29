import { createExerciseFromList } from '../../libs/playground.js';
import { getColor } from '../../libs/utils.js';

const app = document.querySelector('#app');

const settings = [
  {
    title: '1 - Aplicando o \'display: flex\', por padrão, \'align-items\' terá o valor de \'stretch\'. Faça com que os elementos sejam esticados em relação ao \'cross axis\', aplicando o \'display: flex\'.',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    // defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: '2 - Utilize a propriedade \'align-items\' para alinhar os itens no \'inicio\' do \'cross axis\'.',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '3 - Utilize a propriedade \'align-items\' para alinhar os itens no \'fim\' do \'cross axis\'.',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '4 - Utilize a propriedade \'align-items\' para alinhar os itens no \'centro\' do \'cross axis\'.',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '5 - Utilize a propriedade \'align-items\' para alinhar os itens em relação ao \'cross axis\' de acordo com o baseline da fonte.',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    itemsDefaultClasses: ['biggerFontForEvenItems'],
    defaultAnswerValue: 'display: flex;\n',
  },
];

createExerciseFromList(app, settings);
