import { DMMF } from '@prisma/client/runtime/library';
import AwaitEventEmitter from 'await-event-emitter';
import { Project, SourceFile } from 'ts-morph';
import type { WritableDeep } from 'type-fest';

import { createConfig } from './helpers/create-config';
import { ObjectSettings } from './helpers/object-settings';

export type InputType = WritableDeep<DMMF.InputType>;
export type FieldLocation = DMMF.FieldLocation;
export type OutputType = WritableDeep<DMMF.OutputType>;
export type SchemaField = WritableDeep<DMMF.SchemaField>;
export type SchemaEnum = DMMF.DatamodelEnum;
export type Model = WritableDeep<DMMF.Model>;
export type SchemaArg = WritableDeep<DMMF.SchemaArg>;
export type Schema = WritableDeep<DMMF.Schema>;
export type Document = WritableDeep<DMMF.Document>;

export type FieldOutputType = SchemaField['outputType'];

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

export type GeneratorConfiguration = ReturnType<typeof createConfig>;

export type EventArguments = {
  schema: Schema;
  models: Map<string, Model>;
  modelNames: string[];
  modelFields: Map<string, Map<string, Field>>;
  fieldSettings: Map<string, Map<string, ObjectSettings>>;
  config: GeneratorConfiguration;
  project: Project;
  output: string;
  getSourceFile(args: { type: string; name: string }): SourceFile;
  eventEmitter: AwaitEventEmitter;
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

export type Field = DMMF.Field;

export { ObjectSetting, ObjectSettings } from './helpers/object-settings';
export { DMMF } from '@prisma/client/runtime/library';
