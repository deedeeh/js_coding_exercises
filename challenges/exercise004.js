function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const foundNames = [];
  for(let i = 0; i < names.length; i++) {
    if(names[i].substring(0, 1) === char) {
      foundNames.push(names[i]);
    }
  }
  return foundNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const foundVerbs = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].substring(0, 3) === "to ") {
      foundVerbs.push(words[i]);
    }
  }
  return foundVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const onlyIntegers = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === parseInt(nums[i])) {
      onlyIntegers.push(nums[i]);
    }
  }
  return onlyIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  for(let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName)
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];
  for(let i = 0; i < nums.length; i++) {
    squareRoots.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)))
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const foundSentence = [];
  const capitalizedStr = str.substring(0,1).toUpperCase() + str.substring(1)
  for(let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes(str) || sentences[i].includes(capitalizedStr)) {
      foundSentence.push(sentences[i]);
    }
  }
  return foundSentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
