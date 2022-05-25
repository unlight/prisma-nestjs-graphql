import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType()
export class TagCreateOrConnectWithoutArticlesInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: TagWhereUniqueInput;

  @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
  @Type(() => TagCreateWithoutArticlesInput)
  create!: TagCreateWithoutArticlesInput;
}
