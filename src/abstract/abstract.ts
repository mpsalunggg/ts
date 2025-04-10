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
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}
