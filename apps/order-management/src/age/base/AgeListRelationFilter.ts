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
import { AgeWhereInput } from "./AgeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AgeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AgeWhereInput,
  })
  @ValidateNested()
  @Type(() => AgeWhereInput)
  @IsOptional()
  @Field(() => AgeWhereInput, {
    nullable: true,
  })
  every?: AgeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgeWhereInput,
  })
  @ValidateNested()
  @Type(() => AgeWhereInput)
  @IsOptional()
  @Field(() => AgeWhereInput, {
    nullable: true,
  })
  some?: AgeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgeWhereInput,
  })
  @ValidateNested()
  @Type(() => AgeWhereInput)
  @IsOptional()
  @Field(() => AgeWhereInput, {
    nullable: true,
  })
  none?: AgeWhereInput;
}
export { AgeListRelationFilter as AgeListRelationFilter };
