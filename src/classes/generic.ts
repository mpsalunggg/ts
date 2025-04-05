class Repository<T extends { id: number }> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getById(id: number): T | undefined {
    const data = this.data.find((item: T) => item.id === id);
    console.log(data);
    if (data) {
      return data;
    } else {
      throw Error("not found data");
    }
  }

  removeById(id: number): void {
    this.data = this.data.filter((item: T) => item.id === id);
  }

  getAll(): T[] {
    return this.data;
  }
}

type Data = {
  id: number;
  todo: string;
  desc: string;
};

const repository = new Repository<Data>();

repository.add({
  id: 1,
  todo: "write something",
  desc: "test",
});

console.log(repository.getAll());
repository.getById(1);
