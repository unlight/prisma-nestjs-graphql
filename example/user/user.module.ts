import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';

@Module({
  imports: [],
  providers: [UserResolver],
})
export class UserModule {}
