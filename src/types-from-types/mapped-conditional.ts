// ===============================
// 🧱 Base Type
// ===============================
type Personal = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// ===============================
// 🔁 MAPPED TYPES
// ===============================

// ✅ 1. Semua properti menjadi optional
type OptionalUser = {
  [K in keyof Personal]?: Personal[K];
};

// ✅ 2. Semua properti menjadi readonly
type ReadonlyUsers = {
  [K in keyof Personal]: Readonly<Personal[K]>;
};

// ✅ 3. Ubah semua value jadi boolean
type BooleanFlags<T> = {
  [K in keyof T]: boolean;
};

type UserFlags = BooleanFlags<Personal>; // id, name, email, isActive -> boolean

// ===============================
// 🔀 CONDITIONAL TYPES
// ===============================

// ✅ 4. Cek apakah sebuah type adalah string
type IsString<T> = T extends string ? true : false;

type CheckName = IsString<Personal["name"]>;   // true
type CheckId = IsString<Personal["id"]>;       // false

// ✅ 5. Ambil return type dari function
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser(): Personal {
  return { id: 1, name: "Alice", email: "a@a.com", isActive: true };
}

type ReturnUserTypes = GetReturnType<typeof getUser>; // Personal

// ✅ 6. Buang null dan undefined
type Clean<T> = T extends null | undefined ? never : T;

type TestClean = Clean<string | null | undefined>; // string

// ===============================
// 🧩 GABUNGAN MAPPED + CONDITIONAL
// ===============================

// ✅ 7. Jadikan hanya string properties menjadi optional
type PartialStringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]?: T[K];
} & {
  [K in keyof T as T[K] extends string ? never : K]: T[K];
};

type SmartPartial = PartialStringProps<Personal>;
// {
//   id: number;
//   name?: string;
//   email?: string;
//   isActive: boolean;
// }

// ===============================
// 🔍 DEMO PENGGUNAAN
// ===============================
const partialUser: OptionalUser = {
  name: "Bob",
};

const flags: UserFlags = {
  id: true,
  name: false,
  email: true,
  isActive: false,
};

const smart: SmartPartial = {
  id: 1,
  isActive: true,
  // name dan email boleh dihilangkan karena bertipe string
};

console.log("Smart Partial:", smart);
