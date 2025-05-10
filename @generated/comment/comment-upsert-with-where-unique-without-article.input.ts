import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutArticleInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutArticleInput, {nullable:false})
    @Type(() => CommentUpdateWithoutArticleInput)
    update!: CommentUpdateWithoutArticleInput;

    @Field(() => CommentCreateWithoutArticleInput, {nullable:false})
    @Type(() => CommentCreateWithoutArticleInput)
    create!: CommentCreateWithoutArticleInput;
}
