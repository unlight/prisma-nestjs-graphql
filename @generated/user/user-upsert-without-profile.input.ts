import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProfileInput {

    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutProfileInput)
    update!: UserUpdateWithoutProfileInput;

    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutProfileInput)
    create!: UserCreateWithoutProfileInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
