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

#### `tsConfigFilePath`

Path to `tsconfig.json`  
Type: `string`  
Default: `tsconfig.json`

#### `combineScalarFilters`

Combine nested/nullable scalar filters to single  
Type: `boolean`  
Default: `false`

#### `noAtomicOperations`

Remove input types for atomic operations  
Type: `boolean`  
Default: `false`

#### `reExport`

Create `index.ts` file with re-export  
Type: `enum`  
Values:  
`None` Default, create nothing  
`Directories` Create index file in all root directories  
`Single` Create single index file in output directory  
`All` Create index file in all root directories and in output directory

Example configuration:

```prisma
generator nestgraphql {
    provider = "node node_modules/prisma-nestjs-graphql"
    output = "../src/@generated/prisma-nestjs-graphql"
    reExport = Directories
}
```

#### `emitSingle`

Generate single file with merged classes and enums.  
Type: `boolean`  
Default: `false`

#### `emitCompiled`

Emit compiled JavaScript and definitions instead of TypeScript sources,
files will be compiled with `emitDecoratorMetadata:false`, because there is a problem
with temporal dead zone when generating merged file.  
Type: `boolean`  
Default: `false`

#### `types_*`

Map prisma scalar types in [flatten](https://github.com/hughsk/flat) style

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

## Field Settings

Special directives in triple slash comments for more precise code generation.

#### `@HideField()`

Removes field from GraphQL schema.  
Alias: `@TypeGraphQL.omit(output: true)`

By default field will be decorated for hide only in output types (type in schema),
add `input: true` to hide field on input types.

Example:

```prisma
model User {
    id               String    @id @default(cuid())
    /// @HideField()
    password String
    /// @HideField({ output: true, input: true })
    secret String
}
```

Generates fields:

```ts
@ObjectType()
export class User {
    @HideField()
    password: string;
    @HideField()
    secret: string;
}
```

#### Custom Decorators

To applying custom decorators requires configuration of generator.

```sh
generator nestgraphql {
    fields_{Namespace}_from = "module specifier"
    fields_{Namespace}_input = true | false
    fields_{Namespace}_output = true | false
    fields_{Namespace}_defaultImport = "default import name"
    fields_{Namespace}_namespaceImport = "namespace import name"
}
```

Create configuration map in [flatten](https://github.com/hughsk/flat) style for `{Namespace}`.
Where `{Namespace}` is a namespace used in field triple slash comment.

##### `fields_{Namespace}_from`

Required. Name of the module, which will be used in import (`class-validator`, `graphql-scalars`, etc.)

##### `fields_{Namespace}_input`

Optional, default: `false`. Means that it will be applied on input types (classes decorated by `InputType`)

##### `fields_{Namespace}_output`

Optional, default: `false`. Means that it will be applied on output types (classes decorated by `ObjectType`)

##### `fields_{Namespace}_defaultImport`

Default import name, if module have no namespace

##### `fields_{Namespace}_namespaceImport`

Optional. Import all as this namespace from module

Example:

```prisma
generator nestgraphql {
    fields_Validator_from = "class-validator"
    fields_Validator_input = true
}

model User {
    id Int @id
    /// @Validator.MinLength(3)
    name String
}
```

May generate following class:

```ts
import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserCreateInput {
    @Field(() => String, { nullable: false })
    @Validator.MinLength(3)
    name!: string;
}
```

#### @FieldType

Allow set custom type for field

```prisma
model User {
    id Int @id
    /// @FieldType({ name: 'Scalars.EmailAddress', input: true, from: 'graphql-scalars' })
    email String
}
```

May generate class:

```ts
import { InputType, Field } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class UserCreateInput {
    @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
    email!: string;
}
```

And GraphQL schema:

```grapqhl
scalar EmailAddress

input UserCreateInput {
    email: EmailAddress!
}
```

Same field type may be used in different models and it is not convenient to specify every time all options.
There is a shortcut:

```grapqhl
generator nestgraphql {
    fields_Scalars_from = "graphql-scalars"
    fields_Scalars_input = true
    fields_Scalars_output = true
}

model User {
    id Int @id
    /// @FieldType('Scalars.EmailAddress')
    email String
}
```

The result will be the same. `Scalars` is the namespace here.
Missing field options will merged from generator configuration.

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
-   https://github.com/wasp-lang/wasp
