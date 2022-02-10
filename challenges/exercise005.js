const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if(!nums.includes(n) || nums.indexOf(n) === nums.length - 1) {
    return null
  } 
  return nums[nums.indexOf(n) + 1]; 
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let counted1sand0s = {"1": 0, "0": 0};
  str.split('').forEach(str => 
    counted1sand0s[str]++
  )
  return counted1sand0s;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join(''))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((perviousVal, currentVal) => perviousVal + currentVal)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length > 1) {
    const firstItem = arr.shift();
    const lastItem = arr.pop();
    arr.push(firstItem);
    arr.unshift(lastItem);
  }
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for(let key in haystack) {
      if(haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const wordFrequencies = {};
  const noSpecialChars = str.replace(/[^a-zA-Z ]/g, '');
  noSpecialChars.split(' ').forEach(word => {
    word = word.toLowerCase();
    if(wordFrequencies[word]) {
      wordFrequencies[word]++
      return wordFrequencies
    }
    wordFrequencies[word] = 1
  })
  return wordFrequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
