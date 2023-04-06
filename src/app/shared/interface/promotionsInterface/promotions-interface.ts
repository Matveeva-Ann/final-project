export interface IPromoRequest {
  promoTitle: string,
  promoPath: string,
  description: string,
  img:string,
  date: string
}

export interface IPromoResponse extends IPromoRequest{
  id: number
}
