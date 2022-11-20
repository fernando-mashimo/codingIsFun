const quicksort = (array) => {
  if (array.length < 2) return array;
  
  const pivot = array[0];
  const newArray = array.slice(1);
  const lower = [];
  const higher = [];
  const resultArray = [];
  
  for (let element of newArray) {
    if (element < pivot) lower.push(element);
    else higher.push(element);
  }
  
  const lowerSorted = quicksort(lower);
  const higherSorted = quicksort(higher);
  
  for (let element of lowerSorted) {
    resultArray.push(element);
  }
  resultArray.push(pivot);
  for (let element of higherSorted) {
    resultArray.push(element);
  }
  
  return resultArray;
};

console.log(quicksort([999, 3, 5, 2, 1, 4, 10, 1235, 25, 36, 7, 6, 98, 135, 27]));
console.log(quicksort(['fulano', 'xablau', 'cicrano']));