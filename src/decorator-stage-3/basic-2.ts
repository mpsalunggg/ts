console.log("======");
const Logger = (constructor: Function) => {
  console.log(String(constructor.name));
};

@Logger
class Yuhu {
  name = "putra";
}

console.log("=======");
function LogProperty(value: undefined, context: ClassFieldDecoratorContext) {
  console.log(
    `Property "${String(context.name)}" didesain untuk:`,
    context.kind,
  );
  console.log(value), console.log(context);
}

class Product {
  // @LogProperty
  price: number = 100;
}
