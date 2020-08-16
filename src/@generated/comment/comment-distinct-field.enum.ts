import { registerEnumType } from '@nestjs/graphql';

export enum CommentDistinctFieldEnum {
    id = 'id',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    body = 'body',
    authorId = 'authorId',
    articleId = 'articleId',
}

registerEnumType(CommentDistinctFieldEnum, {
    name: 'CommentDistinctFieldEnum',
    description: undefined,
});
