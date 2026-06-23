/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let firstStrs = strs[0];

  for (let i = 0; i < firstStrs.length; i++) {
    let char = firstStrs[i];
    for (let j = 1; j < strs.length; j++) {
      let currentStr = strs[j];
      if (i === currentStr.length || currentStr[i] !== char) {
        return firstStrs.substring(0, i);
      }
    }
  }
  return firstStrs;
};

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
