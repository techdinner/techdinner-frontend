import { ICustomer } from "./customer";

export interface IOrder {
  id: string;
  customer: ICustomer;
  type: "consume" | "withdraw" | "delivery";
  platform: IPlatform;
  status: IStatus;
}

export interface IStatus {
  name: string;
  color: string;
  possibleAfter: IStatus[];
  subStatus: IStatus[];
}

export interface IPlatform {
  id: string;
  name:
    | "WhatsApp"
    | "WhatsApp Bot"
    | "Instagram"
    | "Telegram"
    | "Telegram Bot"
    | "Desk"
    | "Call"
    | "Ifood"
    | "Uber Eats";
  trackingCode?: string;
}
