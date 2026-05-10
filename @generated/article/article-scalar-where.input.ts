import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { BoolFilter } from '../prisma/bool-filter.input.ts';

@InputType()
export class ArticleScalarWhereInput {
  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  AND?: Array<ArticleScalarWhereInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  OR?: Array<ArticleScalarWhereInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  NOT?: Array<ArticleScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  slug?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  title?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  description?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  body?: Identity<StringFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: Identity<DateTimeFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: Identity<DateTimeFilter>;

  @Field(() => IntFilter, { nullable: true })
  favoritesCount?: Identity<IntFilter>;

  @Field(() => StringFilter, { nullable: true })
  authorId?: Identity<StringFilter>;

  @Field(() => BoolFilter, { nullable: true })
  active?: Identity<BoolFilter>;
}
