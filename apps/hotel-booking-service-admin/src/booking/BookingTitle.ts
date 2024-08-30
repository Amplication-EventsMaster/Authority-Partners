import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "comment";

export const BookingTitle = (record: TBooking): string => {
  return record.comment?.toString() || String(record.id);
};
