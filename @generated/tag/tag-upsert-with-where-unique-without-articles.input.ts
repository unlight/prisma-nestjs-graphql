import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => TagUpdateWithoutArticlesInput)
  update!: TagUpdateWithoutArticlesInput;

  @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
  @Type(() => TagCreateWithoutArticlesInput)
  create!: TagCreateWithoutArticlesInput;
}
