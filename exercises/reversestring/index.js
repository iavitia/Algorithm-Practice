// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newStr = str
    .split("")
    .reverse()
    .join("");
  return newStr;

  // Solution without using reverse()
  // let reversed = "";
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // Solution using reduce
  // return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
