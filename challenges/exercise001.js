function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.substring(0,1)}.${lastName.substring(0,1)}`
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const vatPrice = originalPrice * (vatRate / 100);
  const priceAfterVAT = originalPrice + vatPrice;
  return Number(priceAfterVAT.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const reductionPrice = originalPrice * (reduction / 100);
  const priceAfterReduction = originalPrice - reductionPrice;
  if(Number.isInteger(priceAfterReduction) || priceAfterReduction - parseFloat(priceAfterReduction.toFixed(1)) == 0) {
    return priceAfterReduction;
  } 
  return parseFloat(priceAfterReduction.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const middleChar = str.length / 2;
  if(str.length % 2 !== 0) {
    return str.charAt(middleChar);
  }
  return str.charAt(middleChar - 1) + str.charAt(middleChar);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split('').reverse().join(''))
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(user => user.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const scoreTotal = scores.reduce((previousVal, currentVal) => previousVal + currentVal);
  const meanScore = scoreTotal / scores.length;
  return Number(meanScore.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if(n % 3 === 0) {
    return 'fizz';
  } else if(n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
