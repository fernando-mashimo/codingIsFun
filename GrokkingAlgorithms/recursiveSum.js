const sum = (array) => {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

console.log(sum([2, 4, 6, 8, 10, 12, 14]));

// 2  + sum([4, 6, 8, 10, 12, 14]);
// 6  + sum([6, 8, 10, 12, 14]);
// 12 + sum([8, 10, 12, 14]);
// 20 + sum([10, 12, 14]);
// 30 + sum([12, 14]);
// 42 + sum([14]);
// 56 + sum([]);
// 56