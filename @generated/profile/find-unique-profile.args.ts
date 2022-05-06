import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class FindUniqueProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}
