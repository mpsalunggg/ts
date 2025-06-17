function addGreetMethod<T extends new (...args: any[]) => Greetable>(
  baseClass: T,
  _context: ClassDecoratorContext<T>,
) {
  return class extends baseClass {
    constructor(...args: any[]) {
      super(...args);
      this.greet = (greeting: string) => {
        console.log(` ${greeting}, ${this.name}! Have a great day`);
      };
    }
  };
}

interface Greetable {
  name: string;
  greet?: (greeting: string) => void;
}

// @addGreetMethod
class Authors implements Greetable {
  constructor(public name: string) {}
}

const authors = new Authors("Mark");
console.log(authors);
