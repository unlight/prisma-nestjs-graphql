import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => ArticleUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutCommentsInput)
    data!: ArticleUpdateWithoutCommentsInput;
}
