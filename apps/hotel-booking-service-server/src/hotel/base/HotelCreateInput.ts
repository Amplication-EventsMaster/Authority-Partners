/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";
import { Type } from "class-transformer";

@InputType()
class HotelCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoomCreateNestedManyWithoutHotelsInput,
  })
  @ValidateNested()
  @Type(() => RoomCreateNestedManyWithoutHotelsInput)
  @IsOptional()
  @Field(() => RoomCreateNestedManyWithoutHotelsInput, {
    nullable: true,
  })
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
}

export { HotelCreateInput as HotelCreateInput };
