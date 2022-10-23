import { ICustomer } from "./customer";

export interface IOrder {
  id: string;
  customer: ICustomer;
  type: "consume" | "withdraw" | "delivery";
  platform: IPlatform;
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
