import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER = 'USER',
}

registerEnumType(Role, { name: 'Role' });
