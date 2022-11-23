function diagonalDifference(arr) {
  let mainDiag = 0
  let secDiag = 0;
  for (let i = 0; i < arr.length; i += 1) {
    mainDiag += arr[i][i];
  }
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i += 1) {
    secDiag += arr[i][j];
    j -= 1;
  }
  return Math.abs(mainDiag - secDiag);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));