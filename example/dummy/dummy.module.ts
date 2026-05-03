import { Module } from '@nestjs/common';

import { DummyResolver } from './dummy.resolver.ts';

@Module({
  imports: [],
  providers: [DummyResolver],
})
export class DummyModule {}
