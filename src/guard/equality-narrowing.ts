type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shapes): number {
  // this is equality narrowing
  if (shape.kind === "circle") {
    // shape is { kind: "circle"; radius: number }
    return Math.PI * shape.radius ** 2;
  } else {
    // shape is { kind: "square"; side: number }
    return shape.side * shape.side;
  }


  // this code for in operator narrowing
  // if("radius" in shape){
  //   return Math.PI * shape.radius ** 2;
  // } else {
  //    return shape.side * shape.side;
  // }
}