// TODO: Find the number length with out built in functions

let num = 1000,
  len = 1;

while (num >= 10) {
  //console.log({ num });
  num /= 10;
  // console.log({ num });
  len++;
}

console.log({ len });
