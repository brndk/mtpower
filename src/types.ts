export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface CartItem extends Product {
  quantity: number;
}
