type Z = Uppercase<"hello">; // "HELLO"
type Y = Lowercase<"HELLO">; // "hello"
type X = Capitalize<"hello world">; // "Hello world"
type W = Uncapitalize<"Hello">; // "hello"

type Command = Uppercase<"start" | "stop" | "pause">;
// Command = "START" | "STOP" | "PAUSE"
