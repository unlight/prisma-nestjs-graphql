import JSON5 from 'json5';
import { isObject, merge, omit, trim } from 'lodash';
import outmatch from 'outmatch';
import { PlainObject } from 'simplytyped';

import { GeneratorConfiguration } from '../types';

export type ObjectSetting = {
  /**
   * Act as named import or namespaceImport or defaultImport
   */
  name: string;
  kind: 'Decorator' | 'Field' | 'FieldType' | 'PropertyType' | 'ObjectType';
  arguments?: string[] | Record<string, unknown>;
  input: boolean;
  output: boolean;
  model: boolean;
  match?: (test: string) => boolean;
  from: string;
  namespace?: string;
  defaultImport?: string | true;
  namespaceImport?: string;
  namedImport?: boolean;
};

interface ObjectSettingsFilterArgs {
  name: string;
  input?: boolean;
  output?: boolean;
}

export class ObjectSettings extends Array<ObjectSetting> {
  shouldHideField({
    input = false,
    name,
    output = false,
  }: ObjectSettingsFilterArgs): boolean {
    const hideField = this.find(s => s.name === 'HideField');

    return Boolean(
      (hideField?.input && input) ||
        (hideField?.output && output) ||
        hideField?.match?.(name),
    );
  }

  getFieldType({
    input,
    name,
    output,
  }: ObjectSettingsFilterArgs): ObjectSetting | undefined {
    const fieldType = this.find(s => s.kind === 'FieldType');

    if (!fieldType) {
      return undefined;
    }

    if (fieldType.match) {
      return fieldType.match(name) ? fieldType : undefined;
    }

    if (input && !fieldType.input) {
      return undefined;
    }

    if (output && !fieldType.output) {
      return undefined;
    }

    return fieldType;
  }

  getPropertyType({
    input,
    name,
    output,
  }: ObjectSettingsFilterArgs): ObjectSetting | undefined {
    const propertyType = this.find(s => s.kind === 'PropertyType');

    if (!propertyType) {
      return undefined;
    }

    if (propertyType.match) {
      return propertyType.match(name) ? propertyType : undefined;
    }

    if (input && !propertyType.input) {
      return undefined;
    }

    if (output && !propertyType.output) {
      return undefined;
    }

    return propertyType;
  }

  getObjectTypeArguments(options: Record<string, any>): string[] {
    const objectTypeOptions = merge({}, options);
    const resultArguments: any[] = [objectTypeOptions];
    const objectType = this.find(s => s.kind === 'ObjectType');
    if (objectType && isObject(objectType.arguments)) {
      const name = (objectType.arguments as PlainObject).name;
      merge(objectTypeOptions, omit(objectType.arguments, 'name'));
      if (name) {
        resultArguments.unshift(name);
      }
    }
    return resultArguments.map(x => JSON5.stringify(x));
  }

  fieldArguments(): Record<string, unknown> | undefined {
    const item = this.find(item => item.kind === 'Field');
    if (item) {
      return item.arguments as Record<string, unknown>;
    }
  }
}

export function createObjectSettings(args: {
  text: string;
  config: GeneratorConfiguration;
}) {
  const { config, text } = args;
  const result = new ObjectSettings();
  const textLines = text.split('\n');
  const documentationLines: string[] = [];

  let fieldElement = result.find(item => item.kind === 'Field');
  if (!fieldElement) {
    fieldElement = {
      arguments: {},
      kind: 'Field',
      name: '',
    } as ObjectSetting;
  }

  for (const line of textLines) {
    const match = /^@(?<name>\w+(\.(\w+))?)\((?<args>.*)\)/.exec(line);
    const { documentLine, element } = createSettingElement({
      config,
      fieldElement,
      line,
      match,
    });

    if (element) {
      result.push(element);
    }

    if (documentLine) {
      documentationLines.push(line);
    }
  }

  return {
    documentation: documentationLines.filter(Boolean).join('\n') || undefined,
    settings: result,
  };
}

function createSettingElement({
  config,
  fieldElement,
  line,
  match,
}: {
  line: string;
  config: GeneratorConfiguration;
  fieldElement: ObjectSetting;
  match: RegExpExecArray | null;
}) {
  const result = {
    documentLine: '',
    element: undefined as ObjectSetting | undefined,
  };
  if (line.startsWith('@deprecated')) {
    fieldElement.arguments!['deprecationReason'] = trim(line.slice(11));

    result.element = fieldElement;

    return result;
  }

  if (line.startsWith('@complexity')) {
    let n = Number.parseInt(trim(line.slice(11)));
    if (n !== n || n < 1) n = 1;
    fieldElement.arguments!['complexity'] = n;

    result.element = fieldElement;

    return result;
  }

  const name = match?.groups?.name;

  if (!(match && name)) {
    result.documentLine = line;
    return result;
  }

  const element: ObjectSetting = {
    arguments: [],
    from: '',
    input: false,
    kind: 'Decorator',
    model: false,
    name: '',
    output: false,
  };

  result.element = element;

  if (name === 'TypeGraphQL.omit' || name === 'HideField') {
    Object.assign(element, hideFieldDecorator(match));

    return result;
  }

  if (['FieldType', 'PropertyType'].includes(name) && match.groups?.args) {
    const options = customType(match.groups.args);
    merge(element, options.namespace && config.fields[options.namespace], options, {
      kind: name,
    });
    return result;
  }

  if (name === 'ObjectType' && match.groups?.args) {
    element.kind = 'ObjectType';
    const options = customType(match.groups.args) as Record<string, unknown>;
    if (typeof options[0] === 'string' && options[0]) {
      options.name = options[0];
    }
    if (isObject(options[1])) {
      merge(options, options[1]);
    }
    element.arguments = {
      isAbstract: options.isAbstract,
      name: options.name,
    };

    return result;
  }

  if (name === 'Directive' && match.groups?.args) {
    const options = customType(match.groups.args);
    merge(element, { from: '@nestjs/graphql', model: true }, options, {
      arguments: Array.isArray(options.arguments)
        ? options.arguments.map(s => JSON5.stringify(s))
        : options.arguments,
      kind: 'Decorator',
      name,
      namespace: false,
    });

    return result;
  }

  const namespace = getNamespace(name);
  element.namespaceImport = namespace;
  const options = {
    arguments: (match.groups?.args || '')
      .split(',')
      .map(s => trim(s))
      .filter(Boolean),
    name,
  };
  merge(element, namespace && config.fields[namespace], options);

  return result;
}

function customType(args: string) {
  const result: Partial<ObjectSetting> = {};
  let options = parseArgs(args);
  if (typeof options === 'string') {
    options = { name: options };
  }
  Object.assign(result, options);
  const namespace = getNamespace(options.name);
  result.namespace = namespace;
  if ((options as { name: string | undefined }).name?.includes('.')) {
    result.namespaceImport = namespace;
  }

  if (typeof options.match === 'string' || Array.isArray(options.match)) {
    result.match = outmatch(options.match, { separator: false });
  }

  return result;
}

function hideFieldDecorator(match: RegExpExecArray) {
  const result: Partial<ObjectSetting> = {
    arguments: [],
    defaultImport: undefined,
    from: '@nestjs/graphql',
    match: undefined,
    name: 'HideField',
    namespaceImport: undefined,
  };
  if (!match.groups?.args) {
    result.output = true;
    return result;
  }

  if (match.groups.args.includes('{') && match.groups.args.includes('}')) {
    const options = parseArgs(match.groups.args) as Record<string, unknown>;
    result.output = Boolean(options.output);
    result.input = Boolean(options.input);
    if (typeof options.match === 'string' || Array.isArray(options.match)) {
      result.match = outmatch(options.match, { separator: false });
    }
  } else {
    if (/output:\s*true/.test(match.groups.args)) {
      result.output = true;
    }
    if (/input:\s*true/.test(match.groups.args)) {
      result.input = true;
    }
  }

  return result;
}

function parseArgs(string: string): Record<string, unknown> | string {
  try {
    return JSON5.parse(string);
  } catch {
    try {
      return JSON5.parse(`[${string}]`);
    } catch {
      throw new Error(`Failed to parse: ${string}`);
    }
  }
}

function getNamespace(name: unknown): string | undefined {
  if (name === undefined) {
    return undefined;
  }
  let result = String(name);
  if (result.includes('.')) {
    [result] = result.split('.');
  }

  return result;
}
