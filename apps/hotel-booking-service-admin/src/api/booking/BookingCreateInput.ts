import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
