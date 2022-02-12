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
  test("throws error if no start passed", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");

    expect(() => {
      createRange("", 9);
    }).toThrow("A start Number is required");
  });

  test("throws error if no end passed", () => {
    expect(() => {
      createRange(4, "");
    }).toThrow("An end Number is required");
  });

  test("returns an array with start number if start and end are the same numbers", () => {
    expect(createRange(0, 0)).toEqual([0]);
    expect(createRange(4, 4, 2)).toEqual([4]);
    expect(createRange(-10, -10, 5)).toEqual([-10]);
  });

  test("returns a range of numbers without a step parameter", () => {
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test("returns a range of numbers with the provided step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(9, 64, 5)).toEqual([9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64]);
    expect(createRange(20, 160, 20)).toEqual([20, 40, 60, 80, 100, 120, 140, 160]);
    expect(createRange(400, 1000, 100)).toEqual([400, 500, 600, 700, 800, 900, 1000]);
  });

  test("returns a range of numbers correctly if start is bigger than end", () => {
    expect(createRange(11, 3, 2)).toEqual([11, 9, 7, 5, 3]);
    expect(createRange(160, 20, 20)).toEqual([160, 140, 120, 100, 80, 60, 40, 20]);
  });

  test("returns a range of numbers correctly if start is a negative number and end is a positive number", () => {
    expect(createRange(-10, 30, 10)).toEqual([-10, 0, 10, 20, 30]);
    expect(createRange(-55, 20, 15)).toEqual([-55, -40, -25, -10, 5, 20]);
  });

  test("returns a range of numbers correctly if start is a positive number and end is a negative number", () => {
    expect(createRange(30, -10, 5)).toEqual([30, 25, 20, 15, 10, 5, 0, -5, -10]);
  });

  test("returns a range of numbers with 1 step if step is a negative number", () => {
    expect(createRange(4, 10, -4)).toEqual([4, 5, 6, 7, 8, 9, 10]);
  });
});

describe("getScreentimeAlertList", () => {
  test("throws an error if no users array passed", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");

    expect(() => {
      getScreentimeAlertList("", "2019-10-09");
    }).toThrow("A users Array is required");
  });

  test("throws an error if no date passed", () => {
    expect(() => {
      getScreentimeAlertList([]);
    }).toThrow("date is required");

    expect(() => {
      getScreentimeAlertList([], {});
    }).toThrow("A date String is required");
  });

  test("returns an empty array if no users provided", () => {
    expect(getScreentimeAlertList([], "2019-05-04")).toEqual([]);
  });

  test("returns an array if no users used more than 100 minutes of screenTime for the given date", () => {
    const users1 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
        ]
      }
    ]

    expect(getScreentimeAlertList(users1, "2019-06-13")).toEqual([]);
  });

  test("returns an array of usernames of users used more than 100 minutes of screenTime for the given date", () => {
    const users2 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 35, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-05-04", usage: { mapMyRun: 20, whatsApp: 30, facebook: 40, safari: 20} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
        ]
      }
    ]
    expect(getScreentimeAlertList(users2, "2019-05-02")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users2, "2019-05-04")).toEqual(["beth_1234", "sam_j_1989"]);
  });

  test("returns the correct usernames of users if the given date is an empty usage object", () => {
    const users3 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 35, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: {} },
          { date: "2021-08-01", usage: { twitter: 10, instagram: 56, facebook: 61} }
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-05-03", usage: {} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          { date: "2021-08-01", usage: {} }
        ]
      }
    ]
    expect(getScreentimeAlertList(users3, "2021-08-01")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users3, "2019-05-03")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("throws an error if no hexadecimal color passed", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");

    expect(() => {
      hexToRGB(20);
    }).toThrow("A hexStr of type String is required");
  })

  test("returns the correct RGB code for the passed hexadecimal color", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#1A0BF5")).toBe("rgb(26,11,245)");
  });

  test("Ignores case sensitive hexadecimal code", () => {
    expect(hexToRGB("#0a78e6")).toBe("rgb(10,120,230)");
  });
});

describe("findWinner", () => {

});