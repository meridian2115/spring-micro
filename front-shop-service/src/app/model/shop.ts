export interface Shop {
  name: string,
  address: string
}

export interface ShopManager {
  username: string,
  shop: Shop
}

export interface VisitTask {
  shop: Shop,
  description: string,
  deadline: Date
}
