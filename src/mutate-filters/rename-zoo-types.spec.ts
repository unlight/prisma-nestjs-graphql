import expect from 'expect';

import { replacementTypeName } from './rename-zoo-types';

describe('rename zoo types', () => {
    it('create update nested', () => {
        expect(
            replacementTypeName('CommentCreateNestedManyWithoutArticleInput'),
        ).toEqual('CommentCreateManyWithoutArticleInput');
        expect(
            replacementTypeName('CommentUncheckedCreateNestedManyWithoutArticleInput'),
        ).toEqual('CommentCreateManyWithoutArticleInput');
        expect(replacementTypeName('UserCreateNestedOneWithoutArticlesInput')).toEqual(
            'UserCreateOneWithoutArticlesInput',
        );
    });

    it('envelope input', () => {
        expect(replacementTypeName('ArticleCreateManyAuthorInputEnvelope')).toEqual(
            'ArticleCreateManyAuthorEnvelopeInput',
        );
    });
});
