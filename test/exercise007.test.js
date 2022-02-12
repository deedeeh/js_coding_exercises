const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("throws an error if no number passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("");
    }).toThrow("A Number is required");
  });

  test("returns the sum of all digits in a number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(467)).toBe(17);
    expect(sumDigits(300879)).toBe(27);
  });

  test("returns the sum correctly of all digits in a decimal number", () => {
    expect(sumDigits(123.50)).toBe(7);
    expect(sumDigits(6789.9234)).toBe(22);
    expect(sumDigits(8123595.347)).toBe(33);
  });

  test("returns 0 if n is a negative number", () => {
    expect(sumDigits(-456)).toBe(0);
    expect(sumDigits(-1)).toBe(0);
  });
});

describe("createRange", () => {
  test("returns an empty array if start and end are 0", () => {
    expect(createRange(0, 0)).toEqual([]);
  });

  // test("returns a range of numbers without a step parameter", () => {

  // });
});

describe("getScreentimeAlertList", () => {

});

describe("hexToRGB", () => {

});

describe("findWinner", () => {

});