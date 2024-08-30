import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
