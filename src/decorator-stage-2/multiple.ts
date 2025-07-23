interface MapLocation {
  lat: number;
  long: number;
}

function AddLocation(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(
    classConstructor: T
  ) => {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

@AddLocation(1.234, 1.876)
class Person3 {
  constructor(public name: string, public age: number) {}
}

const person3: Person3 = new Person3('John', 32);
console.log(person3);