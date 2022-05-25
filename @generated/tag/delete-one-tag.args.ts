import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTagArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: TagWhereUniqueInput;
}
