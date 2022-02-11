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
  test("throws an error if no string passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA(12);
    }).toThrow("A String is required");

    expect(() => {
      isValidDNA([]);
    }).toThrow("A String is required");
  })

  test("returns false if the string is empty", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("returns true if it is a valid DNA string that should contain C, G, T or A characters", () => {
    expect(isValidDNA("ABBTTTK")).toBe(true);
  });

  test("returns false if it is not a valid DNA string", () => {
    expect(isValidDNA("HHWEOOOO")).toBe(false);
  });

  test("ignores case sensitive string", () => {
    expect(isValidDNA("alggct")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("throws an error if no string passed", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");

    expect(() => {
      getComplementaryDNA(2);
    }).toThrow("A String is required")
  })

  test("returns the complementary base pairs of a valid DNA string", ()=> {
    expect(getComplementaryDNA("AATG")).toBe("TTAC");
    expect(getComplementaryDNA("GGGTTACCAAG")).toBe("CCCAATGGTTC");
  })
});

describe("isItPrime", () => {

});

describe("createMatrix", () => {

});

describe("areWeCovered", () => {

});
