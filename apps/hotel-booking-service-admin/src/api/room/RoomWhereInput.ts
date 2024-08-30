import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  pricePerNight?: FloatNullableFilter;
  typeField?: "Option1";
};
