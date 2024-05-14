type Members = {
  name: string;
  email: string;
  [key: string]: string;
};

const members: Members = {
  name: "Putra",
  email: "putra@gmail.com",
  phone: "123456",
  address: "tg.tururuka",
};

console.log(members);
