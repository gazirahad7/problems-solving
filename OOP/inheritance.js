class Developer {
  constructor(name, age, stack) {
    this.name = name;
    this.age = age;
    this.stack = stack;
  }

  into() {
    return `Name is ${this.name} & age is ${this.age} work in ${this.stack}  `;
  }
}

const gazi = new Developer("Rahad", 22, "frontend");
//console.log(gazi.into());

class Frontend extends Developer {
  constructor(name, age, stack, skills) {
    super(name, age, stack);
    this.skills = skills;
  }

  herSkills() {
    for (const skill of this.skills) {
      console.log(skill);
    }
  }
}

const rubel = new Frontend("Rubel", 25, "frontend", ["HTML", "CSS", "JS"]);

console.log(rubel.into());
console.log(rubel.herSkills());
