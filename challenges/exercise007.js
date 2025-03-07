/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== 'number') throw new Error("A Number is required")
  let summedDigits = 0
  if(n >= 0) {
    Math.round(n).toString().split('').forEach(str => {
      summedDigits += parseInt(str)
    });
  }
  return summedDigits;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if ( typeof start !== 'number') throw new Error("A start Number is required");
  if (typeof end !== 'number') throw new Error("An end Number is required")
  const rangeNumbers = []
  if(start !==  end) {
    if(step !== undefined && step > 0) {
      if(start > end) {
        for(let i = start; i >= end; i-= step) {
          rangeNumbers.push(i)
        }
      } else {
        for(let i = start; i <= end; i+= step) {
          rangeNumbers.push(i)
        }
      }
    } else {
      if(start > end) {
        for(let i = start; i >= end; i--) {
          rangeNumbers.push(i)
        }
      } else {
        for(let i = start; i <= end; i++) {
          rangeNumbers.push(i)
        }
      }
    }
  } else {
    rangeNumbers.push(start);
  }
  return rangeNumbers;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users)) throw new Error("A users Array is required");
  if (typeof date !== 'string') throw new Error("A date String is required");
  const usernamesOfUsers = []
  let screenTimeInMinutes = 0;
  users.filter(user => {
    user.screenTime.filter(usageData => {
      if(Object.keys(usageData.usage).length !== 0) {
        if(date === usageData.date) {
          for(let key in usageData.usage) {
            screenTimeInMinutes += usageData.usage[key];
          }
          if(screenTimeInMinutes > 100) {
            usernamesOfUsers.push(user.username);
          }
        }
      }
    });
  })
  return usernamesOfUsers
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== 'string') throw new Error("A hexStr of type String is required");
  let r = 0;
  let g = 0;
  let b = 0;
  const hexCodePaired = [];
  const splitStr = hexStr.replace("#", "").split("");
  hexCodePaired.push(splitStr[0] + splitStr[1]);
  hexCodePaired.push(splitStr[2] + splitStr[3]);
  hexCodePaired.push(splitStr[4] + splitStr[5]);
  r = parseInt(hexCodePaired[0], 16);
  g = parseInt(hexCodePaired[1], 16);
  b = parseInt(hexCodePaired[2], 16);
  return `rgb(${r},${g},${b})`
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("A board Array is required");
  let winner = ""
  const boardXO = board.flat();
  if((boardXO[0] === boardXO[3] && boardXO[3] === boardXO[6]) 
  || (boardXO[0] === boardXO[1] && boardXO[1] === boardXO[2]) 
  || (boardXO[0] === boardXO[4] && boardXO[4] === boardXO[8])) {
    winner = boardXO[0]; 
  } else if((boardXO[3] === boardXO[4] && boardXO[4] === boardXO[5]) 
  || (boardXO[1] === boardXO[4] && boardXO[4] === boardXO[7]) 
  || (boardXO[2] === boardXO[4] && boardXO[4] === boardXO[6])) {
    winner = boardXO[4]
  } else if((boardXO[2] === boardXO[5] && boardXO[5] === boardXO[8]) 
  ||(boardXO[6] === boardXO[7] && boardXO[7] === boardXO[8])) {
    winner = boardXO[8]
  } else {
    winner = null;
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
