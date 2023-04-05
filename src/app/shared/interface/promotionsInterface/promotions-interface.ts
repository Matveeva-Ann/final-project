export interface IPromoRequest {
  promoTitle: string,
  promoPath: string,
  description: string,
  img:string
}

export interface IPromoResponse extends IPromoRequest{
  id: number
}
