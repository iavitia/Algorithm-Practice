// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

module.exports = capitalize;

// function capitalize(str) {
//   let arr = str.split(" ");
//   const copy = [];

//   arr.forEach(function(item) {
//     copy.push(item[0].toUpperCase() + item.slice(1).toLowerCase());
//   });

//   return copy.join(" ");
// }S
