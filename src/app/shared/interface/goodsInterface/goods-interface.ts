
export interface IGoodsRequest {
  category: string;
  title: string;
  path: string;
  ingredients: string;
  weight: string;
  img: string;
  price: number;
}

export interface IGoodsResponse extends IGoodsRequest {
  id: number;
}