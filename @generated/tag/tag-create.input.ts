import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCreateNestedManyWithoutTagsInput } from '../article/article-create-nested-many-without-tags.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ArticleCreateNestedManyWithoutTagsInput, { nullable: true })
  @Type(() => ArticleCreateNestedManyWithoutTagsInput)
  articles?: Identity<ArticleCreateNestedManyWithoutTagsInput>;
}
