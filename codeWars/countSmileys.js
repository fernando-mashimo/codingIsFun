const checkSmile = (string) => {
  if (string.length === 2) {
    return (string[0] === ':' || string[0] === ';') && (string[1] === ')' || string[1] === 'D');
  }
  return (string[0] === ':' || string[0] === ';') && (string[1] === '-' || string[1] === '~') && (string[2] === ')' || string[2] === 'D');
}

const countSmileys = (array) => {
  let counter = 0;
  array.forEach((string) => {
    if(checkSmile(string)) counter += 1;
  });
  return counter;
};

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

module.exports = countSmileys;