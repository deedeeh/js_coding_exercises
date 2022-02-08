function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.length === 0 ? nums : nums.map(num => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCased = [];
  if(words.length === 1) {
    return words.join('');
  }
  camelCased = words.slice(1).map(word => word[0].toUpperCase() + word.slice(1))
  return words[0] + camelCased.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countTotalSubjects = 0;
  people.forEach(person => {
    if(person.subjects.length > 0) {
      countTotalSubjects += person.subjects.length;
    }
  })
  return countTotalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
