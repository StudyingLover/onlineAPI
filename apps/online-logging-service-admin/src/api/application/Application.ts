import { Log } from "../log/Log";

export type Application = {
  createdAt: Date;
  id: string;
  logs?: Array<Log>;
  name: string | null;
  updatedAt: Date;
};
