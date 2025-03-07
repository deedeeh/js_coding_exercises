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
  test("throws an error if not a number passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");

    expect(() => {
      isItPrime("foo");
    }).toThrow("A Number is required");
  })

  test("returns false if number passed is 0 or 1", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
  });

  test("returns true if number passed is a prime number", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(89)).toBe(true);
    expect(isItPrime(757)).toBe(true);
  });

  test("returns false if number passed is not a prime number", () => {
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(164)).toBe(false);
    expect(isItPrime(4300)).toBe(false);
  })
});

describe("createMatrix", () => {
  test("throws an error if no number passed", () => {
    expect(() => {
      createMatrix(undefined, "hello");
    }).toThrow("n is required");

    expect(() => {
      createMatrix([], "hello");
    }).toThrow("A Number is required");
  });

  test("throws an error if no string passed", () => {
    expect(() => {
      createMatrix(2, undefined);
    }).toThrow("fill is required");

    expect(() => {
      createMatrix(2, []);
    }).toThrow("A fill of type String is required")
  });

  test("returns an empty array if n is 0", () => {
    expect(createMatrix(0, "foo")).toEqual([]);
  });

  test("returns an array of n arrays filled with fill string", () => {
    const catMatrix = [
      ["cat", "cat", "cat"],
      ["cat", "cat", "cat"],
      ["cat", "cat", "cat"]
    ]

    const iceCreamMatrix = [
      ["ice cream", "ice cream", "ice cream", "ice cream", "ice cream"],
      ["ice cream", "ice cream", "ice cream", "ice cream", "ice cream"],
      ["ice cream", "ice cream", "ice cream", "ice cream", "ice cream"],
      ["ice cream", "ice cream", "ice cream", "ice cream", "ice cream"],
      ["ice cream", "ice cream", "ice cream", "ice cream", "ice cream"]
    ]

    expect(createMatrix(1, "foo")).toEqual([ ["foo"] ]);
    expect(createMatrix(3, "cat")).toEqual(catMatrix);
    expect(createMatrix(5, "ice cream")).toEqual(iceCreamMatrix);
  })
});

describe("areWeCovered", () => {
  test("throws an error if no array passed", () => {
    expect(() => {
      areWeCovered(undefined, "Monday");
    }).toThrow("staff is required");

    expect(() => {
      areWeCovered(24, "Tuesday");
    }).toThrow("A staff Array is required");
  });

  test("throws an error if no day passed", () => {
    expect(() => {
      areWeCovered([], undefined);
    }).toThrow("day is required");

    expect(() => {
      areWeCovered([], 5);
    }).toThrow("A day String is required")
  })


  test("returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Monday")).toBe(false);
  });

  test("returns false if there are staff but less than 3 staff members on the required day", () => {
    const staff = [
      {name: "John", rota: ["Monday", "Tuesday", "Friday"]},
      {name: "Lara", rota: ["Monday", "Wednesday", "Saturday"]},
      {name: "Patrick", rota: ["Saturday", "Sunday", "Thursday"]}
    ]
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
  });

  test("returns true if there are at least 3 staff members on the required day", () => {
    const staff = [
      {name: "John", rota: ["Monday", "Tuesday", "Friday"]},
      {name: "Lara", rota: ["Monday", "Wednesday", "Saturday"]},
      {name: "Patrick", rota: ["Saturday", "Sunday", "Thursday"]},
      {name: "Cristina", rota: ["Saturday", "Monday", "Thursday"]},
      {name: "Laura", rota: ["Tuesday", "Wednesday", "Friday"]},
      {name: "Andrew", rota: ["Monday", "Tuesday", "Thursday"]},
      {name: "Lucy", rota: ["Wednesday", "Thursday", "Sunday"]},
      {name: "Adam", rota: ["Sunday", "Tuesday", "Friday"]}

    ]
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  })
});
