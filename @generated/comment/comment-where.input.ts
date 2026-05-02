import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input.ts';
import { UserWhereInput } from '../user/user-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleWhereInput } from '../article/article-where.input.ts';

@InputType()
export class CommentWhereInput {
  @Field(() => [CommentWhereInput], { nullable: true })
  AND?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  OR?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  NOT?: Array<CommentWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  body?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  articleId?: StringNullableFilter;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  author?: UserWhereInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  article?: ArticleWhereInput;
}
