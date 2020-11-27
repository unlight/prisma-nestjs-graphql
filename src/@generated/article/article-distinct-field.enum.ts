import { registerEnumType } from '@nestjs/graphql';

export enum ArticleDistinctFieldEnum {
    id = 'id',
    slug = 'slug',
    title = 'title',
    description = 'description',
    body = 'body',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    favoritesCount = 'favoritesCount',
    authorId = 'authorId',
    active = 'active',
}

registerEnumType(ArticleDistinctFieldEnum, { name: 'ArticleDistinctFieldEnum' });
