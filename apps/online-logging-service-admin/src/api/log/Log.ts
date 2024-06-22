import { Application } from "../application/Application";

export type Log = {
  application?: Application | null;
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
