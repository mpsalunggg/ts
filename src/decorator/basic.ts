const methodLogger = (originalMethod: any, context: any) => {
  console.log(originalMethod);
  console.log(context)
};

const classDecorator = (target: any, context: any) => {
  console.log(String(target))
  console.log(context)
}


@classDecorator
class DecoratorExample {
  @methodLogger
  greet() {
    console.log("hellooo broo");
  }
}
