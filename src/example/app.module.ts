import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RecipesModule } from './recipes/recipes.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        RecipesModule,
        UserModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
    ],
})
export class AppModule {}
