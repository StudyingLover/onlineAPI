import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  applicationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
