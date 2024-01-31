import { updateDiceImage } from "./src/utils.js";

const diceImage = document.querySelector("img");
document
  .querySelector("button")
  .addEventListener("click", () => updateDiceImage(diceImage));
