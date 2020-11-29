import { createExerciseFromList } from '../../libs/playground.js';
import { getColor } from '../../libs/utils.js';

const app = document.querySelector('#app');

const settings = [
  {
    title: '1 - Alinhe os quadrados lado a lado, da extremidade esquerda para a direita aplicando o \'display: flex\'. Por padrão, \'flex-direction\' terá o valor de \'row\'',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    // defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: '2 - Utilize a propriedade \'flex-direction\' para posicionar os quadrados começando da extremidade direita e indo em direção a extremidade esquerda',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '3 - Utilize a propriedade \'flex-direction\' para posicionar os quadrados em coluna, começando no topo do container e indo em direção à parte de baixo',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
  {
    title: '4 - Utilize a propriedade \'flex-direction\' para posicionar os quadrados em coluna, começando na parte de baixo do container e indo em direção à parte de cima',
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n',
  },
];

createExerciseFromList(app, settings);
