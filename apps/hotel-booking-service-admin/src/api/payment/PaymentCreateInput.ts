import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  date?: Date | null;
  paymentMethod?: "Option1" | null;
};
