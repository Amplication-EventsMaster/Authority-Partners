import { Room } from "../room/Room";

export type Hotel = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
