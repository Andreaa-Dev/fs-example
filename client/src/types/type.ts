export type Product = {
  name: string;
  price: number;
};

export type ProductOrder = Product & {
  quantity: number;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Order = {
  createdAt: number;
  productList: ProductOrder[];
  userId: string;
};
