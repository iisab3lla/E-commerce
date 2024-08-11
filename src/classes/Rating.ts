import { Product } from "./Product";
import { User } from "./User";

export type Rate = 1 | 2 | 3 | 4 | 5;

export class Rating {
  public rate: Rate;
  private _product: Product;
  private _user: User;
    

  constructor(rate: Rate, product: Product, user: User) {
    this.rate = rate;
    this._product = product;
    this._user = user;
  }
  public get product(): Product {
    return this._product;

  }
  
}
