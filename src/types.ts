import type { DMMF } from '@prisma/generator-helper';
import type AwaitEventEmitter from 'await-event-emitter';
import type { Project, SourceFile } from 'ts-morph';
import type { WritableDeep } from 'type-fest';

import type { Configuration } from './configuration.class.ts';
import { ReExportType } from './handlers/re-export.ts';
import type {
  ObjectSetting,
  ObjectSettings,
} from './helpers/object-settings.ts';

export type { ReExportType } from './handlers/re-export.ts';
export {
  type ObjectSetting,
  type ObjectSettings,
} from './helpers/object-settings.ts';
export type { Dictionary } from 'lodash';
export type TAwaitEventEmitter = AwaitEventEmitter.default;
export type InputType = WritableDeep<DMMF.InputType>;
export type FieldLocation = DMMF.FieldLocation;
export type OutputType = WritableDeep<DMMF.OutputType>;
export type SchemaField = WritableDeep<DMMF.SchemaField>;
export type SchemaEnum = DMMF.SchemaEnum;
export type Model = WritableDeep<DMMF.Model>;
export type SchemaArg = WritableDeep<DMMF.SchemaArg>;
export type Schema = WritableDeep<DMMF.Schema>;
export type Document = WritableDeep<DMMF.Document>;
export type FieldOutputType = SchemaField['outputType'];
export type Field = DMMF.Field;
export type InputTypeRef = DMMF.InputTypeRef;
export type FieldNamespace = DMMF.FieldNamespace;

/**
 * @deprecated
 */
export type LegacyDecorateElement = {
  isMatchField: (s: string) => boolean;
  isMatchType: (s: string) => boolean;
  from: string;
  name: string;
  arguments?: string[];
  namedImport: boolean;
  defaultImport?: string | true;
  namespaceImport?: string;
  type: string;
  field: string;
};

export type FieldInfo = {
  /**
   * Prisma DMMF field location type
   * Can be: 'scalar', 'inputObjectTypes', 'outputObjectTypes', 'enumTypes', 'fieldRefTypes'
   */
  location: FieldLocation;
  /**
   * Class name
   */
  objectName: string;
  /**
   * Property name
   */
  propertyName: string;
  /**
   * Property type (may contain TypeScript elements, like parameters for generics, etc.)
   */
  propertyType: string;
  /**
   * GraphQL/Prisma type name
   */
  typeName: string;
};

export type TypeRecord = Partial<{
  /**
   * TypeScript field/property type
   * @type {string}
   */
  fieldType: string;
  fieldModule: string;
  graphqlType: string;
  graphqlModule: string;
}>;

export type ConfigFieldSetting = Partial<Omit<ObjectSetting, 'name'>>;

/**
 * @deprecated
 */
export type LegacyConfigInputItem = {
  typeName: string;
  ALL?: string;
  [index: string]: string | undefined;
};

/**
 * Configuration lines defined in schema
 */
export type GeneratorConfigLine = string | string[] | undefined | null;

export type GetInputTypeFunctionArgs = {
  inputTypeName: string;
  fieldName: string;
  fieldInputTypes: InputTypeRef[];
};

export type EventArguments = {
  schema: Schema;
  models: Map<string, Model>;
  modelNames: string[];
  modelFields: Map<string, Map<string, Field>>;
  fieldSettings: Map<string, Map<string, ObjectSettings>>;
  config: Configuration;
  project: Project;
  output: string;
  getSourceFile(args: { type: string; name: string }): SourceFile;
  eventEmitter: TAwaitEventEmitter;
  typeNames: Set<string>;
  removeTypes: Set<string>;
  enums: Record<string, DMMF.DatamodelEnum | undefined>;
  getModelName(name: string): string | undefined;
  /**
   * Input types for this models should be decorated @Type(() => Self)
   */
  classTransformerTypeModels: Set<string>;
};

export type ImportNameSpec = { name: string; specifier?: string };

export type EmittedBlockType =
  | 'prismaEnums'
  | 'schemaEnums'
  | 'models'
  | 'inputs'
  | 'args'
  | 'outputs';

export type EmitBlocksOption =
  | 'enums'
  | 'models'
  | 'inputs'
  | 'args'
  | 'outputs';

export type ConfigFieldRecord = {
  /** Arguments passed to the decorator.
   * @default [] */
  arguments?: string[];
  /** Import as default export.
   * Use `true` to import by the field namespace name. */
  defaultImport?: string | true;
  /** Module to import from (e.g. 'class-validator') */
  from?: string;
  /** Apply decorator on InputType classes.
   * @default false */
  input?: boolean;
  /** Apply decorator only on model ObjectType classes.
   * @default false */
  model?: boolean;
  /** Import entire module under this namespace.
   * @default equals field namespace name */
  namespaceImport?: string;
  /** Apply decorator on ObjectType/output classes.
   * @default false */
  output?: boolean;
};

/**
 * @example
 * WhereInput: { '*': 'WhereInput' },
 * PostCreateInput: { author: 'UserCreateNestedOneWithoutPostsInput' },
 */
export type ConfigInputTypeMap = Record<string, Record<string, string>>;
type GetInputTypeRefFunction = (
  args: GetInputTypeFunctionArgs,
) => InputTypeRef | undefined;
type GetInputTypePatternFunction = (
  args: GetInputTypeFunctionArgs,
) => string | undefined;

type GetInputTypeFunction =
  | GetInputTypeRefFunction
  | GetInputTypePatternFunction;

export type CustomImportItem = {
  /** Import as default export.
   * Use `true` to import by name. */
  defaultImport?: string | true;
  /** Module specifier to import from (e.g. 'class-validator') */
  from: string;
  /** Name to import */
  name: string;
  /** Import as a named export.
   * @default false */
  namedImport?: boolean;
  /** Import entire module under this namespace */
  namespaceImport?: string;
};

/**
 * Return `true` to generate `@HideField()` instead of `@Field()` for a field.
 */
type ShouldHideFieldFunction = (args: FieldInfo) => boolean;
/**
 * Modern decorator rule for `ExternalConfig.decorators`.
 * Prefer this over legacy `decorate_*` schema keys.
 */

export type DecoratorItem = {
  /** Return `true` to apply this decorator to the current field. */
  match: (args: FieldInfo) => boolean;
  /** Arguments passed to the decorator call.
   * Supports templates like `{propertyType.0}`. */
  arguments?: string[];
  /** Module specifier to import from (e.g. 'class-validator') */
  from: string;
  /** Decorator name. Can include namespace, e.g. `Transform.Type`. */
  name: string;
  /** Import as a named export. */
  namedImport?: boolean;
  /** Import as default export.
   * Use `true` to import by decorator name. */
  defaultImport?: string | true;
  /** Import entire module under this namespace. */
  namespaceImport?: string;
};

export type ExternalConfig = Partial<{
  /**
   * Output folder for generated files.
   * If path relative and defined in schema it will be relative to schema,
   * if defined in config file it will be relative to this config file.
   */
  output: string;

  /**
   * File path and name pattern for generated files.
   * @type {string}
   * Available tokens:
   * - `{model}` — Model name in dashed-case, or 'prisma' if unknown
   * - `{name}` — Dashed-case name of model/input/arg without suffix
   * - `{type}` — Short type name (model, input, args, output)
   * - `{plural.type}` — Plural short type name (models, inputs, enums)
   * @default '{model}/{name}.{type}.ts'
   */
  outputFilePattern: string;

  /**
   * Append an extension to relative import and export module specifiers.
   * Useful when your project uses ESM or a custom module resolution.
   * @example 'js', 'ts', 'mjs'
   */
  importExtension: string;

  /**
   * Combine nested/nullable scalar filters into a single filter type.
   * When enabled, reduces the number of generated filter classes by merging
   * e.g. `StringNullableFilter` and `StringFilter` into one.
   * @default true
   */
  combineScalarFilters: boolean;

  /**
   * Remove input types for atomic operations.
   * When enabled, types like `IntFieldUpdateOperationsInput` are not generated.
   * @default true
   */
  noAtomicOperations: boolean;

  /**
   * Emit only selected blocks. Some blocks depend on others
   * (e.g. models requires schemaEnums, inputs requires prismaEnums).
   * Valid block names: 'args', 'inputs', 'outputs', 'models', 'enums'
   * @default All blocks enabled
   */
  emitBlocks: EmitBlocksOption[];

  /**
   * Omit the `_count` field from model output types.
   * @default false
   */
  omitModelsCount: boolean;

  /**
   * Emit compiled JavaScript and definition files instead of TypeScript sources.
   * @default false
   */
  emitCompiled: boolean;

  /**
   * Path to tsconfig.json (absolute or relative to CWD).
   * If not specified, auto-detects `tsconfig.json` if it exists.
   */
  tsConfigFilePath: string;

  /**
   * Re-export strategy for generated files.
   * - None — No re-export index files (default)
   * - Directories — Index file in each root directory
   * - Single — Single index file in the output directory
   * - All — All of the above
   * @default None
   */
  reExport: ReExportType;

  /**
   * Delete all files in the output folder before each generation.
   * @default false
   */
  purgeOutput: boolean;

  /**
   * Mark single-field WhereUniqueInput fields as required (TypeScript)
   * and non-nullable (GraphQL).
   * NOTE: This will break compatibility between Prisma types and generated classes.
   * @default false
   */
  requireSingleFieldsInWhereUniqueInput: boolean;

  /**
   * Generate a single merged file with all classes and enums
   * instead of one file per model/input/arg.
   * @default false
   */
  emitSingle: boolean;

  /**
   * Make all fields in `*WhereUniqueInput` classes non-optional TypeScript properties.
   * @default false
   */
  unsafeCompatibleWhereUniqueInput: boolean;

  /**
   * Add `nullable: true` to relation list properties on output types.
   * Changes `[Type!]!` → `[Type!]` in the GraphQL schema.
   * @default false
   */
  typeListNullable: boolean;

  /**
   * Import path used for Prisma Client imports in generated files.
   * @default '@prisma/client'
   */
  prismaClientImport: string;

  /**
   * Disable GraphQL ID type usage, using Int/Float for @id fields instead.
   * @default false
   */
  noTypeId: boolean;

  /**
   * Custom GraphQL scalar type mappings for Prisma scalar types.
   * Keyed by Prisma scalar type name (e.g. 'BigInt', 'DateTime').
   * @example
   * // Override BigInt with graphql-scalars' GraphQLBigInt:
   * { BigInt: { name: 'GraphQLBigInt', specifier: 'graphql-scalars' } }
   */
  graphqlScalars: Record<string, ImportNameSpec | undefined>;

  /**
   * Per-field custom decorator configuration, keyed by namespace.
   * Enables automatic decorator application from external modules
   * on fields annotated with `@{namespace}.XXX` in the Prisma schema.
   * Each namespace entry defines:
   * - `from` — Module specifier to import (e.g. 'class-validator')
   * - `input` — Apply to InputType classes
   * - `output` — Apply to ObjectType/output classes
   * - `model` — Apply only to model ObjectType classes
   * - `defaultImport` — Import as default export (true = use namespace as name)
   * - `namespaceImport` — Import entire module under this namespace
   * - `namedImport` — Import as named export
   *
   * @example
   * // Schema:  /// @Validator.MinLength(3)
   * // Config:  { from: 'class-validator', input: true }
   * // Result:  import * as Validator from 'class-validator';  @Validator.MinLength(3)
   */
  fields: Record<string, ConfigFieldRecord | undefined>;

  /**
   * Input type mapping.
   * Select which input type should be exposed when multiple candidates exist.
   * Since GraphQL does not support input unions, this setting can resolve
   * ambiguous fields (e.g. `UserRelationFilter` vs `UserWhereInput`).
   *
   * Supports two variants:
   * - object map: `{ [inputTypeName]: { [fieldName|'*']: pattern } }`
   * - function: return either an `InputTypeRef` or a string pattern
   *   (same matching behavior as map patterns, including `match:` syntax)
   * @example
   * // Force all WhereInput relation properties to use the plain WhereInput type:
   * { WhereInput: { '*': 'WhereInput' } }
   * // Or for a specific property in a specific type:
   * { PostCreateInput: { author: 'UserCreateNestedOneWithoutPostsInput' } }
   * // Function variant returning a pattern:
   * ({ inputTypeName, fieldName }) =>
   *   inputTypeName.includes('CreateOne') && fieldName === 'data'
   *     ? 'UncheckedCreate'
   *     : undefined
   */
  inputType: GetInputTypeFunction | ConfigInputTypeMap;

  /**
   * Custom import statements injected into generated files.
   * Each element specifies:
   * - `from` — Module specifier to import from
   * - `name` — Name to import
   * - `namedImport` — Import as named export
   * - `defaultImport` — Import as default export
   * - `namespaceImport` — Import entire module under this namespace
   */
  customImports: CustomImportItem[];

  /**
   * Hook for deciding whether a generated field should be hidden in GraphQL schema.
   * Called for each generated input/output/model field.
   * Returning `true` adds `@HideField()` and skips `@Field()`.
   * When set, this hook overrides hide settings from field comments and legacy `decorate`.
   */
  shouldHideField: ShouldHideFieldFunction;
  /**
   * Modern way to attach decorators to generated fields.
   * Each rule is evaluated against generated field metadata (`FieldInfo`) and
   * applied when `match` returns `true`.
   * Prefer this over legacy `decorate`/`decorate_*` schema configuration.
   */

  decorators: DecoratorItem[];
}>;
