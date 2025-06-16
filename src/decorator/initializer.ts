function methodLogger2<This, Args extends any[], Return>(log: string) {
  return function (
    originalMethod: (this: This, ...args: Args) => Return,
    _context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >,
  ) {
    return function (this: This, ...args: Args) {
      console.log(log + "Invocation Started");
      const result = originalMethod.call(this, ...args);
      console.log(log + "Invocation ended");
      return result;
    };
  };
}

function bound(
  _originalMethod: Function,
  context: ClassMethodDecoratorContext,
) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${
        methodName as string
      }.`,
    );
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Peoplee {
  constructor(public name: string) {
    // this.greet = this.greet.bind(this);
  }

  @bound
  @methodLogger2<Peoplee, [string], void>("log :")
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let peopleee: Peoplee = new Peoplee("John");
peopleee.greet("Hello");

console.log("==========================");

const greet = peopleee.greet;
greet("Morning");
