type Example = {
  id: number;
  name?: string; // optional
};

type RequiredUser = Required<Example>;

const example: RequiredUser = {
  id: 1,
  name: "Alice", // ✅ sekarang wajib diisi
};