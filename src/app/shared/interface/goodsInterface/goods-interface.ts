
export interface IGoodsRequest {
  category: string;
  categoryPath: string;
  title: string;
  path: string;
  ingredients: string;
  weight: number;
  img: string;
  price: number;
  count: number;
  unit: string;
}

export interface IGoodsResponse extends IGoodsRequest {
  id: number;
}