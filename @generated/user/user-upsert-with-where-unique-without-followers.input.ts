import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>;

    @Field(() => UserUpdateWithoutFollowersInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowersInput)
    update!: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowersInput)
    create!: UserCreateWithoutFollowersInput;
}
