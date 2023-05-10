import { SortOrder } from "../../util/SortOrder";

export type HelloOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
