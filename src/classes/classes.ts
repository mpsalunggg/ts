class PeopleInfo {
  readonly id: string;
  name: string;
  age?: number;

  constructor(id: string, name: string, age?: number) {
    this.id = id;
    this.name = name;
    if (age) {
      this.age = age;
    }
  }

  getPeopleInfo(): string {
    return `Id: ${this.id}, name: ${this.name}, age: ${
      this.age ?? "not provided"
    }`;
  }
}

const people1: PeopleInfo = new PeopleInfo("1", "mps");

console.log(people1.getPeopleInfo());
