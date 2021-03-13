# prisma-nestjs-graphql

Generate object types, inputs, args, etc. from prisma schema file for usage with @nestjs/graphql module.

## Features

-   Generates only necessary imports
-   Combines zoo of nested/nullable filters
-   Does not generate resolvers, since it's application specific

## Install

```sh
npm install --save-dev prisma-nestjs-graphql
```

## Usage

1. Add new generator section to `schema.prisma` file

```prisma
generator nestgraphql {
    provider = "node node_modules/prisma-nestjs-graphql"
    output = "../src/@generated/prisma-nestjs-graphql"
}
```

2. Run prisma generate

```sh
npx prisma generate
```

## Generator options

#### `output`

Output folder relative to this schema file

#### `outputFilePattern`

File pattern  
Type: `string`  
Default: `{model}/{name}.{type}.ts`  
Possible tokens:

-   `{model}` Model name in dashed case or 'prisma' if unknown
-   `{name}` Dashed-case name of model/input/arg without suffix
-   `{type}` Short type name (model, input, args, output)
-   `{plural.type}` Plural short type name (models, inputs, enums)

#### `combineScalarFilters`

Combine nested/nullable scalar filters to single  
Type: `boolean`  
Default: `false`

#### `noAtomicOperations`

Remove input types for atomic operations  
Type: `boolean`  
Default: `false`

#### `reExportAll`

Create `index.ts` files for each directory with re-export  
Type: `boolean`  
Default: `false`

#### `types_*`

Map prisma types in [flatten](https://github.com/hughsk/flat) style

-   `types_{type}_fieldType` TypeScript field type name
-   `types_{type}_fieldModule` Module to import
-   `types_{type}_graphqlType` GraphQL type name
-   `types_{type}_graphqlModule` Module to import

Where `{type}` is prisma type in schema

Example (Decimal):

```prisma
types_Decimal_fieldType = "Decimal"
types_Decimal_fieldModule = "decimal.js"
types_Decimal_graphqlType = "GraphQLDecimal"
types_Decimal_graphqlModule = "graphql-type-decimal"
```

Generates field:

```ts
import { GraphQLDecimal } from 'graphql-type-decimal';
import { Decimal } from 'decimal.js';
...
@Field(() => GraphQLDecimal)
field: Decimal;
```

Example (DateTime):

```prisma
types_DateTime_fieldType = "Date"
types_DateTime_graphqlType = "GraphQLISODateTime"
types_DateTime_graphqlModule = "@nestjs/graphql"
```

Generated fields:

```ts
@Field(() => GraphQLISODateTime)
field: Date;
```

## Field Metadata

Special directives in triple slash comments for more precise code generation.

#### `@HideField()`

Removes field from GraphQL schema.  
Alias: `@TypeGraphQL.omit(output: true)`

Note: Field will be decorated for hide only in output types (type in schema),
but not in inputs.

Example:

```prisma
model User {
    id               String    @id @default(cuid())
    /// @HideField()
    password         String
}
```

Generates fields:

```ts
@ObjectType()
export class User {
    @HideField()
    password: string;
}
```

## Similar Projects

-   https://github.com/wSedlacek/prisma-generators/tree/master/libs/nestjs
-   https://github.com/EndyKaufman/typegraphql-prisma-nestjs
-   https://github.com/MichalLytek/typegraphql-prisma

## Resources

-   Todo - https://github.com/unlight/prisma-nestjs-graphql/issues/2
-   https://github.com/prisma/prisma/blob/master/src/packages/client/src/generation/TSClient/TSClient.ts
-   https://ts-ast-viewer.com/
-   https://github.com/unlight/nestjs-graphql-prisma-realworld-example-app
-   https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model
-   JSON type for the code first approach - https://github.com/nestjs/graphql/issues/111#issuecomment-631452899
-   https://github.com/paljs/prisma-tools/tree/master/packages/plugins

## TODO

-   new format of custom type

    ```
    type_{schemaType}_{key} = "{value}"
    schemaType

    ```
