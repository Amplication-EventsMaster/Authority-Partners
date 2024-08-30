import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  location?: string | null;
  name?: string | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
