export const getRandomNumber = (limit) => Math.floor(Math.random() * limit + 1);

export const getColor = () => {
  const red = getRandomNumber(127);
  const green = getRandomNumber(127);
  const blue = getRandomNumber(127);
  return `rgb(${red}, ${green}, ${blue})`;
};
