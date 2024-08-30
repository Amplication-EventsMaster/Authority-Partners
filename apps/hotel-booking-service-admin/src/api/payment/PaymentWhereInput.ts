import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
};
