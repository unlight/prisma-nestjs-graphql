import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { Prisma } from '../../prisma-client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutFavoritedByInput {

    @Field(() => [ArticleCreateWithoutFavoritedByInput], {nullable:true})
    @Type(() => ArticleCreateWithoutFavoritedByInput)
    create?: Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleCreateOrConnectWithoutFavoritedByInput], {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutFavoritedByInput)
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;
}
