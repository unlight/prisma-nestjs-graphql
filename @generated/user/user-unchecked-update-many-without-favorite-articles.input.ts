import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input.ts';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input.ts';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input.ts';
import { Type } from 'class-transformer';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input.ts';

@InputType()
export class UserUncheckedUpdateManyWithoutFavoriteArticlesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  bio?: Identity<NullableStringFieldUpdateOperationsInput>;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: Identity<NullableStringFieldUpdateOperationsInput>;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  countComments?: Identity<NullableIntFieldUpdateOperationsInput>;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  rating?: Identity<NullableFloatFieldUpdateOperationsInput>;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => NullableDecimalFieldUpdateOperationsInput)
  money?: Identity<NullableDecimalFieldUpdateOperationsInput>;

  @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: Identity<NullableEnumRoleFieldUpdateOperationsInput>;
}
