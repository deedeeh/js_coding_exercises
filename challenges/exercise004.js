function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.substring(0,1) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substring(0,3) === "to ")
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num === parseInt(num))
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach(user => 
    cities.push(user.data.city.displayName)
  )
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => parseFloat(Math.sqrt(num).toFixed(2)))
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const capitalizedStr = str.substring(0,1).toUpperCase() + str.substring(1)
  return sentences.filter(sentence => {
    if(sentence.includes(str) || sentence.includes(capitalizedStr)) {
      return sentence
    }
  })
}

//Still trying to figure it out 
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // const longestSides = [];
  // for(let i = 0; i < triangles.length; i++) {
  //   for(let j = 0; j < triangles[i].length; j++) {
  //     triangles[i][j]
  //   }
  // }
  // return longestSides;
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
