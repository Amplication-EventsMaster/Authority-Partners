import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  pricePerNight?: number | null;
  typeField?: "Option1" | null;
};
