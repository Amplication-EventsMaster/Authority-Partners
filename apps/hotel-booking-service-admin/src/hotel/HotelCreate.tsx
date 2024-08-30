import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const HotelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="rooms"
          reference="Room"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
