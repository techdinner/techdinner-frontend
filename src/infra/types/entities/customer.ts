import { IAddress } from "./address";

export interface ICustomer {
  id: string;
  name: string;
  contacts: IContact[];
  tags?: ITag[];
  addresses?: IAddress[];
}

export interface IContact {
  id: string;
  phoneNumber: string;
  isWhatsApp: boolean;
}
export interface ITag {
  id: string;
  tag: string;
}
