import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateManyAuthorInput } from './article-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleCreateManyAuthorInputEnvelope {
  @Field(() => [ArticleCreateManyAuthorInput], { nullable: false })
  @Type(() => ArticleCreateManyAuthorInput)
  data!: Array<ArticleCreateManyAuthorInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
