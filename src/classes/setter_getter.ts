class People {
  private _age?: number;
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw Error("The age must be within the age range 0 until 200");
    }

    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw Error("Age is undefined");
    }

    return this._age;
  }

  public get fullname() {
    return this.firstName + " " + this.lastName;
  }
}

const person1: People = new People("Putra", "Satria");

person1.age = 21;
console.log(person1.fullname);
console.log(person1.age);
