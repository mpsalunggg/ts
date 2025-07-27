type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  breadth: number;
};

// Add a new Reactangle share to the union and see that exhaustive check will throw a proper Typescript error.
type Shape = Circle | Square | Rectangle ;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.breadth
    default:
      const _exhaustiveCheck: never = shape; // ❌ TypeScript error if a case is missing
      throw new Error("Unhandled shape type");
  }
}