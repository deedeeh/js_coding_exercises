const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("it throws an error if no array is passed", () => { 
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("Hello")
    }).toThrow("An array is required");

    expect(() => {
      sumMultiples(8)
    }).toThrow("An array is required")
  });

  test("it returns the sum of any numbers which are a multiple of 3 or 5 in an array", () => {
    expect(sumMultiples([3, 10, 2, 6, 8, 15, 22])).toBe(34);
  });

  test("it returns the sum correctly with decimal numbers", () => {
    expect(sumMultiples([3, 10.0, 2, 6, 8, 15, 22])).toBe(34);
  });

  test("it returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([2, 8, 22])).toBe(0);
  })
});

describe("isValidDNA", () => {

});

describe("getComplementaryDNA", () => {

});

describe("isItPrime", () => {

});

describe("createMatrix", () => {

});

describe("areWeCovered", () => {

});
