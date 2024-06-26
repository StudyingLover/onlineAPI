/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LogWhereUniqueInput } from "../../log/base/LogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LogUpdateManyWithoutApplicationsInput {
  @Field(() => [LogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LogWhereUniqueInput],
  })
  connect?: Array<LogWhereUniqueInput>;

  @Field(() => [LogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LogWhereUniqueInput],
  })
  disconnect?: Array<LogWhereUniqueInput>;

  @Field(() => [LogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LogWhereUniqueInput],
  })
  set?: Array<LogWhereUniqueInput>;
}

export { LogUpdateManyWithoutApplicationsInput as LogUpdateManyWithoutApplicationsInput };
