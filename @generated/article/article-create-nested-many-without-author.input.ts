import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedManyWithoutAuthorInput {
  @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create?: Array<ArticleCreateWithoutAuthorInput>;

  @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

  @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ArticleCreateManyAuthorInputEnvelope)
  createMany?: ArticleCreateManyAuthorInputEnvelope;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<ArticleWhereUniqueInput>;
}
