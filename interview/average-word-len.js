// Create a function that takes a sentence as input and returns the average length of each word in that sentence. Round your result to two decimal places.

/* Test Case 1:

Input : “A B C”

Output : 1.00


Test Case 2:

Input : "What a gorgeous day."

Output : 4.00


Test Case 3:

Input : "Dude, this is so awesome!"

Output : 3.80 */

function averageWordLength(str) {
  // remove special characters

  str = str.replace(/[^\w\s]/gi, "");

  console.log({ str });

  let arr = str.split(" ");

  console.log({ arr });

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }

  return (sum / arr.length).toFixed(2);
}

console.log(averageWordLength("Dude, this is so awesome!"));
