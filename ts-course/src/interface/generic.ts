enum TypeAnimal {
  mamalia = "mamalia",
  herbivora = "herbivora",
  karnivora = "karnivora",
  omnivora = "omnivora",
}

enum TypeColorAnimal {
  blue = "blue",
  white = "white",
  black = "black",
}

interface TypeofAnimal<Type, Color> {
  name: string;
  type: Type;
  color: Color;
  desc: string;
}

const blueCat: TypeofAnimal<TypeAnimal, TypeColorAnimal> = {
  name: "mio",
  type: TypeAnimal.omnivora,
  color: TypeColorAnimal.blue,
  desc: "this is a blue cat",
};

console.log(blueCat);
