import { createExerciseFromList } from '../../libs/playground.js';
import { getColor } from '../../libs/utils.js';

const app = document.querySelector('#app');

const settings = [
  {
    title: '1 - Aplicando o \'display: flex\', por padrão, \'flex-wrap\' terá o valor de \'nowrap\'. Faça com que os elementos sejam acomodados dentro do container quebrando a linha para baixo',
    numberOfItems: 10,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '2 - Faça com que os elementos sejam acomodados dentro do container quebrando a linha para cima',
    numberOfItems: 10,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
];

createExerciseFromList(app, settings);
