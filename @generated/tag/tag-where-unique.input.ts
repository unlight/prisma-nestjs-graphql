import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class TagWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [TagWhereInput], { nullable: true })
  AND?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  OR?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  NOT?: Array<TagWhereInput>;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  articles?: ArticleListRelationFilter;
}
