import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DummyUpdatedecimalsInput } from './dummy-updatedecimals.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyUpdatefriendsInput } from './dummy-updatefriends.input';

@InputType()
export class DummyUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  int?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  float?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => NullableBytesFieldUpdateOperationsInput, { nullable: true })
  bytes?: NullableBytesFieldUpdateOperationsInput;

  @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => DecimalFieldUpdateOperationsInput)
  decimal?: DecimalFieldUpdateOperationsInput;

  @Field(() => DummyUpdatedecimalsInput, { nullable: true })
  @Type(() => DummyUpdatedecimalsInput)
  decimals?: DummyUpdatedecimalsInput;

  @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
  bigInt?: NullableBigIntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  json?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  jsonDefault?: any;

  @Field(() => DummyUpdatefriendsInput, { nullable: true })
  @Type(() => DummyUpdatefriendsInput)
  friends?: DummyUpdatefriendsInput;
}
