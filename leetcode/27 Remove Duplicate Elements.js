// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let inputOne = [3, 2, 2, 3];

let inputTwo = [0, 1, 2, 2, 3, 0, 4, 2];

var removeElement = function (nums, val) {
  if (nums.length < 0 || val < 0) return false;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      console.log("i", i);
      i++;
    }
  }

  //   nums.length = i;
  //   return nums;

  return i;
};

console.log(removeElement(inputOne, 3));
console.log(removeElement(inputTwo, 2));
