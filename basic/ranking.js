const input = {
  1: {
    name: "arif",
    roll: 1,
    result: {
      marks: 300,
    },
  },
  2: {
    name: "mazhar",
    roll: 2,
    result: {
      marks: 700,
    },
  },
  3: {
    name: "rubel",
    roll: 3,
    result: {
      marks: 100,
    },
  },
  4: {
    name: "tanvir",
    roll: 4,
    result: {
      marks: 400,
    },
  },
  5: {
    name: "rahad",
    roll: 6,
    result: {
      marks: 100,
    },
  },
};

const sortedArrayFun = (inputObject) => {
  return Object.values(inputObject).sort(
    (a, b) => b.result.marks - a.result.marks
  );
};
const finalOutput = {};

const sortedArray = sortedArrayFun(input);

sortedArray.forEach((item, index) => {
  input[index + 1] = {
    name: item.name,
    roll: index + 1,
    result: {
      marks: item.result.marks,
    },
  };
});

console.log(input);
