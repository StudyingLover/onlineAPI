import { LogUpdateManyWithoutApplicationsInput } from "./LogUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  logs?: LogUpdateManyWithoutApplicationsInput;
  name?: string | null;
};
