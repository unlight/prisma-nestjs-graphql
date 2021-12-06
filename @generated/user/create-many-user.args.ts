import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCreateManyInput } from './user-create-many.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], { nullable: false })
    @ValidateNested()
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
