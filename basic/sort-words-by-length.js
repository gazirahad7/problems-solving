// Problem Name: reverse words by length in a sentence by asc order
const input = "Javascript is a Programming language";
// output:

function sortWordsByLength(data) {
  // TODO:  apply logic

  const getWords = data.split(" ");

  // console.log({ getWords });

  const output = getWords
    .sort((a, b) => {
      return a.length - b.length;
    })
    .join(" ");

  return output;
}
console.log(sortWordsByLength(input));
