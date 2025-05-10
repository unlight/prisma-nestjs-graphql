import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => ArticleCreateNestedOneWithoutCommentsInput, {nullable:true})
    @Type(() => ArticleCreateNestedOneWithoutCommentsInput)
    article?: ArticleCreateNestedOneWithoutCommentsInput;
}
