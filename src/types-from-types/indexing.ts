// ✅ 1. Tipe Produk E-Commerce
type Productss = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// ✅ 2. Indexed Access Types
type ProductName = Productss["name"];          // string
type ProductPrice = Productss["price"];        // number
type ProductAvailability = Productss["inStock"]; // boolean
type ProductValue = Productss[keyof Productss];  // string | number | boolean
type SummaryInfo = Productss["name" | "price"]; // string | number

// ✅ 3. Contoh Variabel Berdasarkan Tipe
const productName: ProductName = "iPhone 15";
const productPrices: ProductPrice = 1499;
const isAvailable: ProductAvailability = true;

// ✅ 4. Fungsi Generic Menggunakan Indexed Access Type
function getProductProperty<T, K extends keyof T>(product: T, key: K): T[K] {
  return product[key];
}

// ✅ 5. Contoh Penggunaan Fungsi
const myProduct: Productss = {
  id: 101,
  name: "MacBook Pro",
  price: 2999,
  inStock: false,
};

const price = getProductProperty(myProduct, "price");   // number
const available = getProductProperty(myProduct, "inStock"); // boolean

// ✅ 6. Fungsi Dinamis untuk Menampilkan Properti
function printProductProperty<T, K extends keyof T>(item: T, key: K) {
  console.log(`${String(key)}: ${item[key]}`);
}

printProductProperty(myProduct, "id");
printProductProperty(myProduct, "name");
printProductProperty(myProduct, "price");
printProductProperty(myProduct, "inStock");

// ❌ Error Jika Key Tidak Valid
// getProductProperty(myProduct, "category"); // Error: '"category"' is not assignable to parameter of type '"id" | "name" | "price" | "inStock"'
