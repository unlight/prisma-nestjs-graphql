import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';

@InputType()
export class UserCreateOrConnectWithoutCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>;

    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: UserCreateWithoutCommentsInput;
}
