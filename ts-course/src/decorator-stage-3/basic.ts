function methodLogger(originalMethod: any, _context: any) {
  console.log("Decorator Invoked");
 
  function replacementMethod(this: any, ...args: any[]) {
    console.log(args);
    console.log(this);
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    console.log(result)
    return result;
  }
  return replacementMethod;
}

class Yuhuu {
  constructor(public name: string) {}

  // @methodLogger
  greet(greeting: string) {
    console.log(` ${greeting}, ${this.name}`);
  }
}

let userr: Yuhuu = new Yuhuu("John");
userr.greet("Hello");
