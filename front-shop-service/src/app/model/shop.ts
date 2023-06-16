export class Shop {
  constructor(private name: string, private address: string){}

  getName(){
    return this.name;
  }
  getAddress(){
    return this.address;
  }
}

export interface ShopManager {
  username: string,
  shop: Shop
}

export interface VisitTask {
  shop: Shop,
  description: string,
  deadline: Date,
  status: string
}
