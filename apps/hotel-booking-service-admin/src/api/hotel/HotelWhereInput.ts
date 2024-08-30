import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HotelWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
};
