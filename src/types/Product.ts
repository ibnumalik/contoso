export interface Product {
  name: string;
  price: number;
}

export interface CartProduct extends Product {
  total: number;
  qty: number;
}
