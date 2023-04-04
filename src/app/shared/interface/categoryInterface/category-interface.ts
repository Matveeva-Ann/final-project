export interface ICategoryRequest {
  title: string;
  path: string;
  img: string;
}

export interface ICategoryResponse extends ICategoryRequest {
  id: number;
}