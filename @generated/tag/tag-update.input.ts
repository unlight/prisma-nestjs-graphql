import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUpdateManyWithoutTagsNestedInput } from '../article/article-update-many-without-tags-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ArticleUpdateManyWithoutTagsNestedInput, { nullable: true })
  @Type(() => ArticleUpdateManyWithoutTagsNestedInput)
  articles?: Identity<ArticleUpdateManyWithoutTagsNestedInput>;
}
