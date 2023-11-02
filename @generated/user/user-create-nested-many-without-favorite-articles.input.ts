import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { Prisma } from '../../prisma-client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutFavoriteArticlesInput {

    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {nullable:true})
    @Type(() => UserCreateWithoutFavoriteArticlesInput)
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;

    @Field(() => [UserCreateOrConnectWithoutFavoriteArticlesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFavoriteArticlesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>>;
}
