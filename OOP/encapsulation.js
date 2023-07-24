/*
const gaziRahad = {
  name: "Gazi Rahad",
  age: 24,
  sector: "Web Development",

  getInfo() {
    return console.log(
      `My name is ${this.name} and age is ${this.age} work in ${this.sector} sector `
    );
  },
};

console.log(gaziRahad.getInfo());

*/

// encapsulation  similar method, property like peket akare akta  class  ar modhe  store kora

class User {
  // private

  #age;
  constructor(name, age, sector) {
    this.name = name;
    this.#age = age;
    this.sector = sector;
  }

  userInfo() {
    return console.log(
      `My name is ${this.name} and age is ${this.#age} work in ${
        this.sector
      } sector `
    );
  }

  // like more similar method will have
}

const rahad = new User("Azizul Islam Rahad", 24, "web Development");

//console.log(rahad.userInfo());

console.log(rahad.userInfo());
