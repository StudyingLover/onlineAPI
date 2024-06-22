import { StringFilter } from "../../util/StringFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicationWhereInput = {
  id?: StringFilter;
  logs?: LogListRelationFilter;
  name?: StringNullableFilter;
};
