// I have an array of some file names and I want to separate these filename and extensions

// Example input array: [“cat.png”, “red.cow.jpeg”, “running-horse.gif”, “ducks,chickens.in.farm.mp4”]

// output array: [“cat”, “red.cow”, “running-horse”, “ducks,chickens.in.farm”]
// output array: [“png”, “jpeg”, “gif”, “mp4”]

let inputArr = [
  "cat.png",
  "red.cow.jpeg",
  "running-horse.gif",
  "ducks,chickens.in.farm.mp4",
];

function separateFileName(arr) {
  let fileName = [];
  let fileExtension = [];

  arr.map((el) => {
    //TODO: find the last dot index number
    const lastDot = el.lastIndexOf(".");
    const name = el.slice(0, lastDot);
    //const extension = el.slice(lastDot + 1, el.length);
    const extension = el.substring(lastDot + 1);

    fileName.push(name);
    fileExtension.push(extension);
  });

  return { fileName, fileExtension };
}

console.log(separateFileName(inputArr));
