class ExampleBind {
  name: string = "mps";

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new ExampleBind();

const sayHello = p.sayHello.bind(p)

sayHello()