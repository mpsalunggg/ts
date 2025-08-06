class Dogs {
  bark() {
    console.log("Woof!");
  }
}

class Cats {
  meow() {
    console.log("Meow!");
  }
}

function makeAnimalSound(animal: Dogs | Cats) {
  if (animal instanceof Dogs) {
    // TypeScript narrows 'animal' to Dogs
    animal.bark();
  } else {
    // Now 'animal' must be a Cats
    animal.meow();
  }
}

// Usage
makeAnimalSound(new Dogs()); // Woof!
makeAnimalSound(new Cats()); // Meow!

abstract class OurProduct {
  constructor(public name: string, public price: number) {}

  abstract getPrice(): number;
}

class Electronics extends OurProduct {
  constructor(name: string, price: number, public warranty: number) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

class Clothing extends OurProduct {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string
  ) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

function displayDetails(product: OurProduct): void {
  console.log(`Name: ${product.name}`);
  console.log(`Name: ${product.getPrice()}`);

  if (product instanceof Electronics) {
    console.log(`Warranty: ${product.warranty}`);
  } else if (product instanceof Clothing) {
    console.log(`Size: ${product.size}`);
    console.log(`Material: ${product.material}`);
  }
}
