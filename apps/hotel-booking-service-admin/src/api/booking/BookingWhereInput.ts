import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  comment?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  room?: RoomWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
};
