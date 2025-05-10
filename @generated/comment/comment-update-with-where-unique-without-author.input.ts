import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutAuthorInput)
    data!: CommentUpdateWithoutAuthorInput;
}
