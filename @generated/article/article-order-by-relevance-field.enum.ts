import { registerEnumType } from '@nestjs/graphql';

export enum ArticleOrderByRelevanceFieldEnum {
    id = "id",
    slug = "slug",
    title = "title",
    description = "description",
    body = "body",
    authorId = "authorId"
}


registerEnumType(ArticleOrderByRelevanceFieldEnum, { name: 'ArticleOrderByRelevanceFieldEnum', description: undefined })
