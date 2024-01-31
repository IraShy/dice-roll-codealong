import { rollDice, updateDiceImage } from "./utils";

describe("rollDice", () => {
  let result;
  beforeEach(() => {
    result = rollDice();
    return result;
  });

  it("should return an integer", () => {
    expect(Number.isInteger(result)).toBe(true);
  });

  it("should return a number between 1 and 6", () => {
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  it("should return all numbers between 1-6 when rolled a lot of times", () => {
    let usedNumbers = [];
    for (let i = 0; i < 10000; i++) {
      const result = rollDice();
      if (!usedNumbers.includes(result)) {
        usedNumbers.push(result);
      }
    }
    expect(usedNumbers.length).toBe(6);
    expect(usedNumbers.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("updateDiceImage", () => {
  const mockImage = document.createElement("img");
  const result = updateDiceImage(mockImage);

  it("returns a string", () => {
    expect(typeof result).toBe("string");
  });

  it("matches a path pattern", () => {
    expect(/\.\/images\/[1-6]\.png/.test(result)).toBe(true);
  });

  // this is wrong because there is possibility that the next random number after 1 will be 1 again.
  // it("should update the dice image", () => {
  //   mockImage.src = "./images/1.png";
  //   document.body.appendChild(mockImage);
  //   updateDiceImage(mockImage);
  //   expect(mockImage.src).not.toEqual("./images/1.png");
  // });
});
