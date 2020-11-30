import { createExerciseFromList } from '../../libs/playground.js';
import { getColor } from '../../libs/utils.js';

const app = document.querySelector('#app');

const settings = [
  {
    title: '1 - Em \'flex containers\' que tenham a propriedade \'flex-wrap\' diferente de \'nowrap\' podemos utilizar \'align-content\' para alinhar as linhas. Adicione-a, por padrão \'align-content\' terá o valor de \'stretch\'.',
    numberOfItems: 8,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\n '
  },
  {
    title: '2 - Utilize a propriedade \'align-content\' para alinhar as linhas no \'inicio\' do \'cross axis\'.',
    numberOfItems: 8,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
  {
    title: '3 - Utilize a propriedade \'align-content\' para alinhar as linhas no \'final\' do \'cross axis\'.',
    numberOfItems: 8,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
  {
    title: '4 - Utilize a propriedade \'align-content\' para alinhar as linhas no \'centro\' do \'cross axis\'.',
    numberOfItems: 8,
    itemSettings: {
      'background-color': getColor(),
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
  {
    title: '5 - Utilize a propriedade \'align-content\' para colocar espaços iguais entre as linhas em relação ao \'cross axis\', sem espaços antes da primeira e depois da última.',
    numberOfItems: 16,
    itemSettings: {
      'background-color': getColor(),
      height: '40px',
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
  {
    title: '6 - Utilize a propriedade \'align-content\' para colocar espaços iguais entre as linhas em relação ao \'cross axis\', porém o espaço antes da primeira e depois da última devem ser menores.',
    numberOfItems: 16,
    itemSettings: {
      'background-color': getColor(),
      height: '40px',
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
  {
    title: '7 - Utilize a propriedade \'align-content\' para colocar espaços entre as linhas em relação ao \'cross axis\', todos os espaços devem ser iguais.',
    numberOfItems: 16,
    itemSettings: {
      'background-color': getColor(),
      height: '40px',
    },
    defaultAnswerValue: 'display: flex;\nflex-wrap: wrap;\n',
  },
];

createExerciseFromList(app, settings);
