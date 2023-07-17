// Problem Name: reverse words by length
const input = "My name is Gazi Rahad";
// output:

function reversWords(data) {
  // TODO:  apply logic

  const getWords = data.split(" ");

  // console.log({ getWords });

  const output = getWords.map((word) => {
    return word.split("").reverse().join("");
  });

  return output.join(" ");
}
console.log(reversWords(input));
