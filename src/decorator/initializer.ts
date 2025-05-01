function methodLogger(originalMethod: any, context: any) {
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

  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

class Peoplee {
  constructor(public name: string) {
    // this.greet = this.greet.bind(this);
  }

  @methodLogger
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let peopleee: Peoplee = new Peoplee("John");
peopleee.greet("Hello");

const greet = peopleee.greet;
greet("Morning");
