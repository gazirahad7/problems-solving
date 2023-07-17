// Problem Name: count duplicate elements in an array
const numbers = [1, 3, 4, 7, 6, 7, 3, 7, 4, 9, 1];
// output: 1 = tow, 3 = tow,  7 = four , others numbers = one

function countDuplicateNum(arr) {
  // TODO:  apply logic

  if (arr.length < 0) return "Empty";
  const output = {};
  arr.map((num) => {
    output[num] = (output[num] || 0) + 1;
  });

  return output;
}
console.log(countDuplicateNum(numbers));
