import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentWhereInput } from './comment-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommentArgs {

    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: CommentUpdateManyMutationInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
