import { Field, Float, InputType, Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => Int, { nullable: true })
    countComments?: number;

    @Field(() => Float, { nullable: true })
    rating?: number;

    @Field(() => Role, { nullable: true })
    role?: keyof typeof Role;

    @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
    following?: UserCreateNestedManyWithoutFollowersInput;

    @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
    followers?: UserCreateNestedManyWithoutFollowingInput;

    @Field(() => ArticleCreateNestedManyWithoutFavoritedByInput, { nullable: true })
    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateNestedManyWithoutAuthorInput, { nullable: true })
    articles?: ArticleCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, { nullable: true })
    comments?: CommentCreateNestedManyWithoutAuthorInput;
}
