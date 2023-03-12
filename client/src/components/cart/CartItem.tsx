import React from "react";
import { ProductOrder } from "../../types/type";

type Item = {
  item: ProductOrder;
};

export default function CartItem({ item }: Item) {
  return (
    <div>
      <div>
        <p>name:{item.name}</p>
        <p>price:{item.price}</p>
        <button>+</button>
        <p> quantity:{item.quantity}</p>
        <button>-</button>
      </div>
    </div>
  );
}
