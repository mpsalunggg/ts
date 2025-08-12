type UserRole = "admin" | "user" | "guest";

type RoleDescriptions = Record<UserRole, string>;

/*
RoleDescriptions = {
  admin: string;
  user: string;
  guest: string;
}
*/

const descriptions: RoleDescriptions = {
  admin: "Has full access",
  user: "Has limited access",
  guest: "Has guest access",
};


// Record<Keys, Type>

type Roless = "author" | "editor" | "researcher";

interface Users {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  contributors: Record<Roless, Users>;
}

const article: Article = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urna, eleifend at malesuada id, suscipit eu",
  // Contributors can be type generated from Roles type and User interface
  contributors: {
    author: { name: "John", email: "john@email.com", age: 32 },
    editor: { name: "Frank", email: "frank@email.com", age: 36 },
    researcher: { name: "Mark", email: "mark@email.com", age: 36 },
  },
};