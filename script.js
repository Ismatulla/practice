const newLetters = []
const smalLetter = []
var nextGreatestLetter = function (letters, target) {
  let sortedLetters = letters.sort()
  sortedLetters.map(letters => {
    if (letters > target) {
      newLetters.push(letters);
    } else if (letters < target) {
      smalLetter.push(letters)
    }
  })
  if (smalLetter.length !== 0) {
    return smalLetter[0]
  }
  if (newLetters.length !== 0) {
    return newLetters[0]
  }
};
nextGreatestLetter(["c", "j", "f"], "c");