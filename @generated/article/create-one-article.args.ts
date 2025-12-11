import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleCreateInput } from './article-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneArticleArgs {

    @Field(() => ArticleCreateInput, {nullable:false})
    @Type(() => ArticleCreateInput)
    data!: ArticleCreateInput;
}
