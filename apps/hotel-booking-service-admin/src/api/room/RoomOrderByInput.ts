import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  pricePerNight?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
