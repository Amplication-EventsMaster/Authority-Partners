import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
};
