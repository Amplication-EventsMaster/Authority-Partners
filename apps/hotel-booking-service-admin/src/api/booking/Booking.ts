import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { Room } from "../room/Room";

export type Booking = {
  bookingDate: Date | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  payments?: Array<Payment>;
  room?: Room | null;
  totalPrice: number | null;
  updatedAt: Date;
};
