function methodLogger2(originalMethod: any, context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
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
  @methodLogger2
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let peopleee: Peoplee = new Peoplee("John");
peopleee.greet("Hello");

const greet = peopleee.greet;
greet("Morning");
