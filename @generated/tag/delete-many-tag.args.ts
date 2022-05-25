import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTagArgs {
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: TagWhereInput;
}
