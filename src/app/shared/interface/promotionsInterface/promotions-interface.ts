export interface IPromoRequest {
  promoTitle: string,
  promoPath: string,
  description: string,
  img:string,
  imgForHome: string,
  date: string,
  categoryPath: string,
}

export interface IPromoResponse extends IPromoRequest{
  id: number
}
