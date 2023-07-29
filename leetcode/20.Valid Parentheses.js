/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

const testCaseOne = "()"; // output = true
const testCaseTwo = "()[]{}"; // output = true
const testCaseThree = "(]"; // output = false

var isValid = function (s) {
  if (typeof s !== "string") return false;

  let closingBrackets = [];
  for (let bracket of s) {
    switch (bracket) {
      case "(":
        closingBrackets.push(")");
        break;
      case "{":
        closingBrackets.push("}");
        break;
      case "[":
        closingBrackets.push("]");
        break;

      default:
        const lastOpenBracket = closingBrackets.pop();
        if (bracket !== lastOpenBracket) return false;
    }
  }

  return closingBrackets.length === 0;
};

console.log(isValid(testCaseOne));
console.log(isValid(testCaseTwo));
console.log(isValid(testCaseThree));
