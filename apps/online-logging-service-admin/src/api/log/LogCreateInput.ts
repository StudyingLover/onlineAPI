import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LogCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
};
