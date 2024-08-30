import { Booking } from "../booking/Booking";

export type Payment = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  paymentMethod?: "Option1" | null;
  updatedAt: Date;
};
