import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereInput } from './article-where.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateToOneWithWhereWithoutCommentsInput } from './article-update-to-one-with-where-without-comments.input';

@InputType()
export class ArticleUpdateOneWithoutCommentsNestedInput {
  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create?: ArticleCreateWithoutCommentsInput;

  @Field(() => ArticleCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

  @Field(() => ArticleUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleUpsertWithoutCommentsInput)
  upsert?: ArticleUpsertWithoutCommentsInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  disconnect?: ArticleWhereInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  delete?: ArticleWhereInput;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateToOneWithWhereWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleUpdateToOneWithWhereWithoutCommentsInput)
  update?: ArticleUpdateToOneWithWhereWithoutCommentsInput;
}
