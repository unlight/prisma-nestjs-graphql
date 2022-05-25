import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  @Type(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;
}
