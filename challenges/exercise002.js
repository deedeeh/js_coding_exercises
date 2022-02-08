function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester" ? true : false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let busCount;
  if(people > 0 && people <= 40) {
    busCount = 1;
  } else if (people > 40) {
    busCount = Math.ceil(people / 40);
  }
  return busCount;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
