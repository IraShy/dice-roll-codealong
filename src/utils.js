const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const updateDiceImage = (element) => {
  element.classList.add("transparent");
  const updatedSource = `./images/${rollDice()}.png`;
  setTimeout(() => {
    element.src = updatedSource;
    element.classList.remove("transparent");
  }, 250);

  return updatedSource;

  // this will not pass the tests because they expect a string to be returned, whereas diceElement.src is not a string.
  // diceElement.src = `./images/${rollDice()}.png`;
  // return diceElement.src;
};

export { rollDice, updateDiceImage };
