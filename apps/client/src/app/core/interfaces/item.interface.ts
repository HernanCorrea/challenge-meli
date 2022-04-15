export interface ItemI {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  location?: string;
  sold_quantity?: number;
}

export interface AuthorI {
  name: string;
  lastname: string;
}

export type CategoryI = string;
