import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { DummyModule } from './dummy/dummy.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        DummyModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: '~schema.gql',
        }),
    ],
})
export class AppModule {}
