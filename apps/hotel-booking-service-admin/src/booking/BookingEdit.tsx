import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { RoomTitle } from "../room/RoomTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <DateTimeInput label="checkInDate" source="checkInDate" />
        <DateTimeInput label="checkOutDate" source="checkOutDate" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
