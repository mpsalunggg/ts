class Config {
  static apikey: string;
  static token: string;
  static num: number;

  static counter() {
    // Accessing static properties through this in the class
    // this.num++;
    // Access the static property directly from the Config class
    Config.num++;
  }

  static loadInitialCount(): number {
    return 5;
  }

  static {
    this.num = this.loadInitialCount();
    console.log("init static block");
    this.apikey = "test 123";
    this.token = "loremasdqi1230123";
  }
}

console.log(Config.apikey);
console.log(Config.num);
Config.counter();
console.log(Config.num);

function loadInitialCount(): number {
  // Simulate loading initial count from an external source
  // This is a simulation of data that is coming from an outside source like an external API
  // This method could be inside as well as outside the class
  return 5;
}
