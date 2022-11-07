const pow = (x, n) => {
  if (n === 1) return x;
  else return x * pow(x, n - 1);
};

console.log(pow(2, 3));
// Início: x = 2, n = 3;
// 1a iteração:
// 2 * pow(2, 2)
// 2a iteração:
// 2 * 2 * pow(2, 1)
// 3a iteração:
// 2 * 2 * 2