import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';

@InputType()
export class TagScalarWhereInput {
  @Field(() => [TagScalarWhereInput], { nullable: true })
  AND?: Array<TagScalarWhereInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  OR?: Array<TagScalarWhereInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  NOT?: Array<TagScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  name?: Identity<StringFilter>;
}
