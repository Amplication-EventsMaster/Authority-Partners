import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  pricePerNight?: number | null;
  typeField?: "Option1" | null;
};
