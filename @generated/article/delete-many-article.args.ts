import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class DeleteManyArticleArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;
}
