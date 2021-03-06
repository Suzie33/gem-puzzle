export default class GameNumbersGenerator {
  generateRandomNumbers(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  checkSequence(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      let counter = 0;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          counter++;
        }
      }
      sum += counter;
    }

    if (sum % 2 === 0) {
      return true;
    }
    return false;
  }

  getNumbers(fieldSize) {
    const numbersCount = fieldSize * fieldSize - 1;
    const numbers = [...Array(numbersCount).keys()].map((x) => x + 1);
    let randomArray = null;
    let isSequenceSolvable = false;

    while (!isSequenceSolvable) {
      randomArray = this.generateRandomNumbers(numbers);
      isSequenceSolvable = this.checkSequence(randomArray);
    }

    return randomArray;
  }
}
