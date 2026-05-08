import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import type { Identity } from 'identity-type';
import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input.ts';

@InputType()
export class BytesNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: Prisma.Bytes;

  @Field(() => [String], { nullable: true })
  in?: Array<Prisma.Bytes>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Prisma.Bytes>;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  not?: Identity<NestedBytesNullableFilter>;
}
