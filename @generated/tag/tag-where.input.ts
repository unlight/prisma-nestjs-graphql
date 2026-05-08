import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagWhereInput {
  @Field(() => [TagWhereInput], { nullable: true })
  AND?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  OR?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  NOT?: Array<TagWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  name?: Identity<StringFilter>;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  articles?: Identity<ArticleListRelationFilter>;
}
