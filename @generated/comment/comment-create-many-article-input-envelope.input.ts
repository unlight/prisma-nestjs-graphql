import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyArticleInput } from './comment-create-many-article.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyArticleInputEnvelope {

    @Field(() => [CommentCreateManyArticleInput], {nullable:false})
    @Type(() => CommentCreateManyArticleInput)
    data!: Array<CommentCreateManyArticleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
