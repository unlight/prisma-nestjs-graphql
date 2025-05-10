import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleCreateManyInput } from './article-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyArticleArgs {

    @Field(() => [ArticleCreateManyInput], {nullable:false})
    @Type(() => ArticleCreateManyInput)
    data!: Array<ArticleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
