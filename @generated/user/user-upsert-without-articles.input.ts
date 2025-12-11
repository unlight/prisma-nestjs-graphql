import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutArticlesInput {

    @Field(() => UserUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => UserUpdateWithoutArticlesInput)
    update!: UserUpdateWithoutArticlesInput;

    @Field(() => UserCreateWithoutArticlesInput, {nullable:false})
    @Type(() => UserCreateWithoutArticlesInput)
    create!: UserCreateWithoutArticlesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
