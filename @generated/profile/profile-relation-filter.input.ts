import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileRelationFilter {
  @Field(() => ProfileWhereInput, { nullable: true })
  is?: ProfileWhereInput;

  @Field(() => ProfileWhereInput, { nullable: true })
  isNot?: ProfileWhereInput;
}
