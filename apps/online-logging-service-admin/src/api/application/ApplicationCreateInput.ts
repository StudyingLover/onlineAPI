import { LogCreateNestedManyWithoutApplicationsInput } from "./LogCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  logs?: LogCreateNestedManyWithoutApplicationsInput;
  name?: string | null;
};
