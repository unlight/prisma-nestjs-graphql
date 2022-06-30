import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';

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

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleUpdateWithoutCommentsInput)
  update?: ArticleUpdateWithoutCommentsInput;
}
