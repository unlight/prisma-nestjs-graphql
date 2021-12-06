import { Module } from '@nestjs/common';

import { DummyResolver } from './dummy.resolver';

@Module({
    imports: [],
    providers: [DummyResolver],
})
export class DummyModule {}
