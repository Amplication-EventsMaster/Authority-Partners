import { Booking } from "../booking/Booking";
import { Hotel } from "../hotel/Hotel";

export type Room = {
  bookings?: Array<Booking>;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  numberField: string | null;
  pricePerNight: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
