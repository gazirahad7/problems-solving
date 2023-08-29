const addTwoPromises = async function (promise1, promise2) {
  const [valueOne, valueTwo] = await Promise.all([promise1, promise2]);

  return valueOne + valueTwo;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
