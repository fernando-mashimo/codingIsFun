const count = (array) => {
  if (array.length === 0) return 0;
  return 1 + count(array.slice(1));
};

console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// In JavaScript, there is an array method called '.length' that actually counts the elements of an array.