type Datas = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<Datas>;

const datas: ReadonlyUser = {
  id: 1,
  name: "Alice",
};

user.name = "Bob";