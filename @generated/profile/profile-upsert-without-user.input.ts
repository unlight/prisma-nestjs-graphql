import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutUserInput {

    @Field(() => ProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutUserInput)
    update!: ProfileUpdateWithoutUserInput;

    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => ProfileCreateWithoutUserInput)
    create!: ProfileCreateWithoutUserInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
