import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
    update!: UserUpdateWithoutCommentsInput;

    @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
    create!: UserCreateWithoutCommentsInput;
}
