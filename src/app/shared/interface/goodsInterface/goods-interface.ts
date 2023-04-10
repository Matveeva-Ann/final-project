
export interface IGoodsRequest {
  category: string;
  title: string;
  path: string;
  ingredients: string;
  weight: number;
  img: string;
  price: number;
  count: number;
}

export interface IGoodsResponse extends IGoodsRequest {
  id: number;
}