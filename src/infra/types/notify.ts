export interface INotify {
  id: string;
  title: string;
  description?: string;
  type: "warning" | "error" | "ok" | "info";
  route: string;
  date: Date;
}
