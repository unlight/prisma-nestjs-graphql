import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProfileInput {

    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutProfileInput)
    create?: UserCreateWithoutProfileInput;

    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>;
}
