function greets(name: string | undefined) {
  if (name) {
    // name is narrowed to 'string' here
    console.log(`Hello, ${name.toUpperCase()}!`);
  } else {
    // name is undefined here
    console.log("Hello, guest!");
  }
}

function printLength(str: string | null) {
  if (str) {
    // won't run for empty string ""
    console.log(`Length: ${str.length}`);
  } else {
    console.log("No string provided.");
  }
}