/*

#FIXME:  problem name: Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1: 

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2: 

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
/*

 TODO:  1st understand the problem question
 TODO:  2nd thinking
 TODO:  3rd  applying your own logic until the solution
 TODO:  check test case
 TODO:  view the best solutions
 TODO:  try to  optimize your code

 */
const longestCommonPrefix = function (strs) {
  if (strs.length < 0) return "";
  let res = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // check res index not exist
    while (strs[i].indexOf(res) !== 0) {
      if (res.length < 0) return false;
      res = res.slice(0, res.length - 1);
    }
  }
  return res;
};

const testCaseOne = ["flower", "flow", "flight"];
const testCaseTwo = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(testCaseOne));
console.log(longestCommonPrefix(testCaseTwo));
