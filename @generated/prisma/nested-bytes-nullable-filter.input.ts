import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class NestedBytesNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: Prisma.Bytes;

  @Field(() => [String], { nullable: true })
  in?: Array<Prisma.Bytes>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<Prisma.Bytes>;

  @Field(() => NestedBytesNullableFilter, { nullable: true })
  not?: NestedBytesNullableFilter;
}
