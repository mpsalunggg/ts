interface PeopleYey {
  firstName: string;
  lastName: string;
  sayHello(): void;
}

class People1 implements PeopleYey {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
  ) {}

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello(): void {
    console.log("hello people satu");
  }
}

class People2 implements PeopleYey {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  sayHello(): void {
    console.log("hello people dua");
  }
}

const people_1: People1 = new People1("mps", "satria", 32);
console.log(people_1.fullname);

class CallPeople {
  public static sayPeopleCall(people: PeopleYey) {
    people.sayHello();
  }
}


CallPeople.sayPeopleCall(people_1)
