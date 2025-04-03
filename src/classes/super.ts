class Parent {
  name: string;
  country: string;
  age: number;

  constructor(name: string, country: string, age: number) {
    this.name = name;
    this.country = country;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} from ${this.country}`;
  }

  showAge() {
    return this.age;
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, country: string, age: number) {
    super(name, country, age);
    this.age = age;
  }

  introduce() {
    return `${super.greet()} and I am ${this.age} years old.`;
  }

  greet(): string {
    return `testtt`;
  }
}
const child = new Child("Putra", "Indonesia", 25);
console.log(child.introduce());
console.log(child.showAge());
