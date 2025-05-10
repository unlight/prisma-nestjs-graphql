import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutArticleInput {

    @Field(() => [CommentCreateWithoutArticleInput], {nullable:true})
    @Type(() => CommentCreateWithoutArticleInput)
    create?: Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    @Field(() => CommentCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyArticleInputEnvelope)
    createMany?: CommentCreateManyArticleInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
