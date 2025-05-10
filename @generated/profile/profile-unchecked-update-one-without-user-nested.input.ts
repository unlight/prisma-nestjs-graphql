import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutUserInput } from './profile-update-to-one-with-where-without-user.input';

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateWithoutUserInput)
    create?: ProfileCreateWithoutUserInput;

    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutUserInput)
    upsert?: ProfileUpsertWithoutUserInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutUserInput)
    update?: ProfileUpdateToOneWithWhereWithoutUserInput;
}
