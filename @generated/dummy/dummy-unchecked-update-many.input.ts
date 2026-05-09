import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input.ts';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input.ts';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input.ts';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input.ts';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input.ts';
import { Type } from 'class-transformer';
import { DummyUpdatedecimalsInput } from './dummy-updatedecimals.input.ts';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input.ts';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyUpdatefriendsInput } from './dummy-updatefriends.input.ts';

@InputType()
export class DummyUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date?: Identity<NullableDateTimeFieldUpdateOperationsInput>;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  int?: Identity<NullableIntFieldUpdateOperationsInput>;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  float?: Identity<NullableFloatFieldUpdateOperationsInput>;

  @Field(() => NullableBytesFieldUpdateOperationsInput, { nullable: true })
  bytes?: Identity<NullableBytesFieldUpdateOperationsInput>;

  @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => DecimalFieldUpdateOperationsInput)
  decimal?: Identity<DecimalFieldUpdateOperationsInput>;

  @Field(() => DummyUpdatedecimalsInput, { nullable: true })
  @Type(() => DummyUpdatedecimalsInput)
  decimals?: Identity<DummyUpdatedecimalsInput>;

  @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
  bigInt?: Identity<NullableBigIntFieldUpdateOperationsInput>;

  @Field(() => GraphQLJSON, { nullable: true })
  json?: any;

  @Field(() => DummyUpdatefriendsInput, { nullable: true })
  @Type(() => DummyUpdatefriendsInput)
  friends?: Identity<DummyUpdatefriendsInput>;
}
