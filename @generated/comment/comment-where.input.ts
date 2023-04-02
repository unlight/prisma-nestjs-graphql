import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { Type } from 'class-transformer';
import { ArticleWhereInput } from '../article/article-where.input';

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
