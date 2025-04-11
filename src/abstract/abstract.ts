abstract class Animal2 {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Dog2 extends Animal2 {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog2();
dog.makeSound(); // Woof!
dog.move(); // Moving...

// const a = new Animal(); ❌ ERROR: Cannot create an instance of an abstract class.

// example 2
type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("IT DEPARTMENT");
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("ADMIN DEPARTMENT");
  }
}

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

const itHolidays: Holidays = [
  {
    date: new Date(2022, 11, 1),
    reason: "IT Day",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2025, 4, 1),
    reason: "Idul Fitri",
  },
];

itDepartment.addHolidays(itHolidays)
adminDepartment.addHolidays(adminHolidays)

console.log(itDepartment)
