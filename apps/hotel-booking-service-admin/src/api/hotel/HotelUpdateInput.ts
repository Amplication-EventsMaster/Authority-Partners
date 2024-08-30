import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  location?: string | null;
  name?: string | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
