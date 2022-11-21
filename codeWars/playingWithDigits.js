const digPow = (n, p) => {
  const digitsArray = n.toString().split('')
    .map((string) => Number(string));
  
  let result = 0;
  digitsArray.forEach((digit) => {
    result += digit ** p;
    p += 1;
  });
  const k = result / n;
  return (k !== Math.floor(k)) ? -1 : k;
}

console.log(digPow(79, 1));

module.exports = {
  digPow,
}