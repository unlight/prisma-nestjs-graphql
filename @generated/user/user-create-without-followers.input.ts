import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Role } from '../prisma/role.enum';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutFollowersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Int, {nullable:true})
    countComments?: number;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    money?: Decimal;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => UserCreateNestedManyWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutFollowersInput)
    following?: UserCreateNestedManyWithoutFollowersInput;

    @Field(() => ArticleCreateNestedManyWithoutFavoritedByInput, {nullable:true})
    @Type(() => ArticleCreateNestedManyWithoutFavoritedByInput)
    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => ArticleCreateNestedManyWithoutAuthorInput)
    articles?: ArticleCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => CommentCreateNestedManyWithoutAuthorInput)
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateNestedOneWithoutUserInput)
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
