import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class UpdateManyArticleArgs {

    @Field(() => ArticleUpdateManyMutationInput, {nullable:false})
    @Type(() => ArticleUpdateManyMutationInput)
    data!: ArticleUpdateManyMutationInput;

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;
}
