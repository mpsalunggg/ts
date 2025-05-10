function methodLogger2(log: string) {
  return function (originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
      console.log(log + "Invocation Started");
      const result = originalMethod.call(this, ...args);
      console.log(log + "Invocation ended");
      return result;
    };
  };
}

function bound(_originalMethod: any, context: any) {
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
  @methodLogger2("log :")
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let peopleee: Peoplee = new Peoplee("John");
peopleee.greet("Hello");

const greet = peopleee.greet;
greet("Morning");
