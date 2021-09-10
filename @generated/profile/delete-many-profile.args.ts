import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class DeleteManyProfileArgs {
    @Field(() => ProfileWhereInput, { nullable: true })
    where?: ProfileWhereInput;
}
