import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProfileArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;
}
