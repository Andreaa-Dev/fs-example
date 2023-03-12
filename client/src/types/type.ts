export type Product = {
  name: string;
  price: number;
};

export type ProductOrder = Product & {
  quantity: number;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Cart = {
  productList: ProductOrder[];
};

export type Order = Cart & {
  createdAt: number;
  userId: string;
};
