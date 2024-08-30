import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
