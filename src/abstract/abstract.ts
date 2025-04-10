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
