import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutFavoritedByInput)
    update!: ArticleUpdateWithoutFavoritedByInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {nullable:false})
    @Type(() => ArticleCreateWithoutFavoritedByInput)
    create!: ArticleCreateWithoutFavoritedByInput;
}
