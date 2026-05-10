import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUncheckedUpdateManyWithoutTagsNestedInput } from '../article/article-unchecked-update-many-without-tags-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ArticleUncheckedUpdateManyWithoutTagsNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutTagsNestedInput)
  articles?: Identity<ArticleUncheckedUpdateManyWithoutTagsNestedInput>;
}
