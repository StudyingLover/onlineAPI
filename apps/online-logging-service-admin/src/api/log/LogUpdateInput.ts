import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LogUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
};
