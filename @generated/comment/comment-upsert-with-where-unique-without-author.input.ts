import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutAuthorInput)
    update!: CommentUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentCreateWithoutAuthorInput)
    create!: CommentCreateWithoutAuthorInput;
}
