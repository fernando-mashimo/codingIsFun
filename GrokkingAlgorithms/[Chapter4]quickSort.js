const quicksort = (unsortedArray) => {
  if (unsortedArray.length < 2) return unsortedArray;
  
  const pivot = unsortedArray[0];
  const newArray = unsortedArray.slice(1);
  const lower = [];
  const higher = [];
  
  newArray.forEach((element) =>
    element < pivot
    ? lower.push(element)
    : higher.push(element)
  );
  
  return quicksort(lower).concat([pivot]).concat(quicksort(higher))
};

console.log(quicksort([999, 3, 5, 2, 1, 4, 10, 1235, 25, 36, 7, 6, 98, 135, 27]));
console.log(quicksort(['fulano', 'xablau', 'cicrano']));
