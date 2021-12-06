import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutArticlesInput {
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

    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
