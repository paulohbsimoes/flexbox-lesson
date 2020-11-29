import { createExercise, createExerciseFromList } from '../../libs/playground.js';
import { getColor } from '../../libs/utils.js';

const app = document.querySelector('#app');

const settings = [
  {
    title: `1 - Aplicando o 'display: flex', por padrão, 'justify-content' terá o valor de 'flex-start'. Faça com que os elementos sejam alinhados no início do 'main axis', aplicando o 'display: flex'.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    // defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: `2 - Utilize a propriedade 'justify-content' para alinhar os itens no 'final' do main axis.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: `3 - Utilize a propriedade 'justify-content' para alinhar os itens no 'centro' do main axis.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: `4 - Utilize a propriedade 'justify-content' para colocar espaços iguais entre os itens em relação ao 'main axis', sem espaços antes do primeiro e depois do último.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: `5 - Utilize a propriedade 'justify-content' para colocar espaços iguais entre os itens em relação ao 'main axis', porém o espaço antes do primeiro e depois do último devem ser menores.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    defaultAnswerValue: 'display: flex;\n'
  },
  {
    title: `6 - Utilize a propriedade 'justify-content' para colocar espaços entre os itens em relação ao 'main axis', todos os espaços devem ser iguais.`,
    numberOfItems: 4,
    itemSettings: {
      'background-color': getColor()
    },
    defaultAnswerValue: 'display: flex;\n'
  },
]

createExerciseFromList(app, settings);
