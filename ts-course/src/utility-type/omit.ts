type Products = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

// Buat tipe baru tanpa properti 'stock'
type ProductPreview = Omit<Products, "stock">;

/*
ProductPreview = {
  id: string;
  name: string;
  price: number;
}
*/

const productPreview: ProductPreview = {
  id: "P001",
  name: "Mechanical Keyboard",
  price: 750000,
};
