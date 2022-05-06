import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  password = 'password',
  bio = 'bio',
  image = 'image',
  countComments = 'countComments',
  rating = 'rating',
  role = 'role',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
