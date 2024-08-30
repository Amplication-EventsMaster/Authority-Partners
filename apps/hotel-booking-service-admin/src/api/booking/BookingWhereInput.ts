import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  room?: RoomWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
};
