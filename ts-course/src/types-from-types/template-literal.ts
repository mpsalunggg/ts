type Hello = `Hello, ${string}`;

type Role = "admin" | "user";

type RoleLabel = `role:${Role}`;

type Lang = "en" | "id";
type Page = "home" | "about";

type Route = `/${Lang}/${Page}`;

type IsStrings<T> = T extends string ? `yes:${T}` : "no";

type A1 = IsStrings<"admin">; // "yes:admin"
type B1 = IsStrings<number>;  // "no"

// with mapped types
type Buttons = "save" | "delete";

type ButtonEventHandlers = {
  [K in Buttons as `on${Capitalize<K>}`]: () => void;
};