class Repository<T extends { id: string }> {
  private data: T[] = [];

  static generateId() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  add(item: T) {
    this.data.push(item);
  }

  getById(id: string): T | undefined {
    const data = this.data.find((item: T) => item.id === id);
    console.log(data);
    if (data) {
      return data;
    } else {
      throw Error("not found data");
    }
  }

  removeById(id: string): void {
    this.data = this.data.filter((item: T) => item.id === id);
  }

  getAll(): T[] {
    return this.data;
  }
}

type Data = {
  id: string;
  todo: string;
  desc: string;
};

const repository = new Repository<Data>();

repository.add({
  id: Repository.generateId(),
  todo: "write something",
  desc: "test",
});

console.log(repository.getAll());
// repository.getById(1);
