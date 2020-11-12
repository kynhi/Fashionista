export interface IUser {
  _id?: string;
  name: string;
  password: string;
  email:string;
  address?: string;//admin may not have address
  usertype: string;
}

export class User implements IUser {
  constructor(
    public name: string,
    public password: string,
    public email:string,

    public usertype: string,
    public address?: string,//admin may not have address
    public _id?: string,
  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.password = password;
    this.email = email;
    this.address = address;
    this.usertype = usertype;
  }
}