import { registerEnumType } from '@nestjs/graphql';

export enum DummyOrderByRelevanceFieldEnum {
  id = 'id',
  friends = 'friends',
}

registerEnumType(DummyOrderByRelevanceFieldEnum, {
  name: 'DummyOrderByRelevanceFieldEnum',
  description: undefined,
});
