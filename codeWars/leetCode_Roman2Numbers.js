// Not the best or most elegant solution, I know... actually, this one was written by me just before the beginning of the course at Trybe.

function solution (roman) {
  let integer = 0;

  for (counter = roman.length-1; counter >= 0; counter -= 1) {
    if (roman.slice(counter-1, counter+1) === "IV") { integer +=4; counter--;}
    else if (roman.slice(counter-1, counter+1) === "IX") { integer +=9; counter--;}
    else if (roman.slice(counter-1, counter+1) === "XL") { integer +=40; counter--;}
    else if (roman.slice(counter-1, counter+1) === "XC") { integer +=90; counter--;}
    else if (roman.slice(counter-1, counter+1) === "CD") { integer +=400; counter--;}
    else if (roman.slice(counter-1, counter+1) === "CM") { integer +=900; counter--;}
    else if (roman[counter] === "I") { integer += 1; }
    else if (roman[counter] === "V") { integer += 5; }
    else if (roman[counter] === "X") { integer += 10; }
    else if (roman[counter] === "L") { integer += 50; }
    else if (roman[counter] === "C") { integer += 100; }
    else if (roman[counter] === "D") { integer += 500; }
    else if (roman[counter] === "M") { integer += 1000; }
  }
  
  return integer;
}

console.log(solution('MMXVI')); // 2016

module.exports = {
  solution
};
