function plusMinus(arr) {
  let positiveNumbersRatio = 0;
  let negativeNumbersRatio = 0;
  let zeroesRatio = 0;
    arr.forEach((number) => {
      if (number > 0) positiveNumbersRatio += (1 / arr.length);
      if (number === 0) zeroesRatio += (1 / arr.length);
      if (number < 0) negativeNumbersRatio += (1 / arr.length);
    });
//   return [positiveNumbersRatio.toFixed(6), negativeNumbersRatio.toFixed(6), zeroesRatio.toFixed(6)];
  return positiveNumbersRatio.toFixed(6);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));