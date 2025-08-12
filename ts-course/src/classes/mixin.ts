type Constructor = new (...args: any[]) => any;

function Timestamp<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}

// Base User class
class User2 {
  constructor(public name: string) {}
}

class UserWithTimestamp extends Timestamp(User2) {
  constructor(
    name: string,
    public age: number,
  ) {
    super(name);
  }

  // Since timestamp is protected we can declare a displayInfor method to
  // display the required information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Timestamp: ${this.getTimestamp()}`); // Call method from Timestamp mixin
  }
}

const user2 = new UserWithTimestamp("Alice", 30);
user2.displayInfo();
