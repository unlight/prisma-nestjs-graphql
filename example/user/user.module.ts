import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver.ts';

@Module({
  imports: [],
  providers: [UserResolver],
})
export class UserModule {}
