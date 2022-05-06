import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  password = 'password',
  bio = 'bio',
  image = 'image',
}

registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: 'UserOrderByRelevanceFieldEnum',
  description: undefined,
});
