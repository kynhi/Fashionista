export interface IProduct {
  _id?: string;
  name: string;
  category:string;
  price;
}

export class Product implements IProduct {
  constructor(
    public name: string,
    public category:string,
    public price,
    public _id?: string,
  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.category = category;
    this.price = price;
  }
}