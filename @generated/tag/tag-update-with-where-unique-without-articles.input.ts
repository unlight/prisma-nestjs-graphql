import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutArticlesInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => TagUpdateWithoutArticlesInput)
  data!: TagUpdateWithoutArticlesInput;
}
