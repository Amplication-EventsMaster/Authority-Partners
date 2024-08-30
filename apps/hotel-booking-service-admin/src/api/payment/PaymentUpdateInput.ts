import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  date?: Date | null;
  paymentMethod?: "Option1" | null;
};
