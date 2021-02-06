export { featureName } from './feature-name';
export { createConfig } from './create-config';

import { ObjectLiteralExpression, PropertyAssignment, StructureKind } from 'ts-morph';

import { PrismaDMMF, TypeRecord } from '../types';
export { checkExport } from './check-export';

export { generateFileName } from './generate-file-name';

type ToGraphqlImportTypeArgs = {
    isId: boolean;
    type: string;
    kind: string;
    customType?: TypeRecord | null;
};

export function toGraphqlImportType(args: ToGraphqlImportTypeArgs) {
    const { isId, type: name, customType } = args;
    if (customType && customType.graphqlType) {
        return {
            name: customType.graphqlType,
            moduleSpecifier: customType.graphqlModule,
        };
    }
    if (isId) {
        return { name: 'ID', moduleSpecifier: '@nestjs/graphql' };
    }
    if (['Int', 'Float'].includes(name)) {
        return { name, moduleSpecifier: '@nestjs/graphql' };
    }
    if (['true', 'Boolean'].includes(name)) {
        return { name: 'Boolean', moduleSpecifier: undefined };
    }
    return { name: 'String', moduleSpecifier: undefined };
}

type PatternKey = {
    type: (type?: string) => boolean;
    kind: string;
};
type PatternValue = (type: string) => string | string[];

const patterns = new Map<PatternKey, PatternValue>([
    [{ type: type => type === 'String', kind: 'scalar' }, () => 'string'],
    [{ type: type => type === 'DateTime', kind: 'scalar' }, () => ['Date', 'string']],
    [{ type: type => type === 'Float', kind: 'scalar' }, () => 'number'],
    [{ type: type => type === 'Int', kind: 'scalar' }, () => 'number'],
    [{ type: type => type === 'Boolean', kind: 'scalar' }, () => 'boolean'],
    [{ type: type => type === 'Json', kind: 'scalar' }, () => 'object'],
    [{ type: type => type === 'Null', kind: 'scalar' }, () => 'null'],
    [{ type: type => type === 'Decimal', kind: 'scalar' }, () => 'string'],
    [{ type: type => type === 'Bytes', kind: 'scalar' }, () => 'Buffer'],
    [{ type: type => type === 'BigInt', kind: 'scalar' }, () => 'BigInt'],
    [{ type: () => true, kind: 'object' }, type => type],
    [{ type: () => true, kind: 'enum' }, type => type],
    [{ type: () => true, kind: 'scalar' }, type => type],
]);

type ToPropertyTypeArgs = {
    type: string;
    kind: string;
    isList: boolean;
};
/**
 * Returns typescript property type.
 */
export function toPropertyType(args: ToPropertyTypeArgs): string {
    const { type, kind, isList } = args;
    for (const [key, get] of patterns.entries()) {
        if (key.kind === kind && key.type(type)) {
            let types = get(type);
            if (!Array.isArray(types)) {
                types = [types];
            }
            if (isList) {
                types = types.map(type => `Array<${type}>`);
            }
            return types.join(' | ');
        }
    }
    throw new TypeError(`Cannot get property type from ${kind}/${type}`);
}

/**
 * See client/src/generation/TSClient.ts @ getAggregationTypes
 */
export function schemaOutputToInput(
    outputType: PrismaDMMF.OutputType,
): PrismaDMMF.InputType {
    return {
        name: outputType.name.replace(/OutputType$/, 'Input'),
        constraints: {
            // eslint-disable-next-line unicorn/no-null
            maxNumFields: null,
            // eslint-disable-next-line unicorn/no-null
            minNumFields: null,
        },
        fields: outputType.fields.map(field => {
            return {
                ...field,
                isNullable: false,
                isRequired: false,
                name: field.name,
                inputTypes: [
                    {
                        isList: false,
                        type: 'true',
                        location: 'scalar',
                    },
                ],
            };
        }),
    };
}

export function schemaFieldToArgument(
    field: PrismaDMMF.SchemaField,
): PrismaDMMF.InputType {
    let name = field.name;
    name = name[0].toUpperCase() + name.slice(1) + 'Args';
    return {
        name,
        fields: field.args,
        constraints: {
            // eslint-disable-next-line unicorn/no-null
            maxNumFields: null,
            // eslint-disable-next-line unicorn/no-null
            minNumFields: null,
        },
    };
}

export function getOutputTypeName(name: string) {
    return name.replace(/(OutputType|Output)$/, '');
}

type UpdateObjectPropertyArgs = {
    expression: ObjectLiteralExpression;
    name: string;
    value: string | number | boolean | undefined;
};

export function updateObjectProperty(args: UpdateObjectPropertyArgs) {
    const { expression, name, value } = args;
    let propertyAssignment = expression.getProperty(name) as
        | PropertyAssignment
        | undefined;

    if (value === undefined) {
        if (propertyAssignment) {
            propertyAssignment.remove();
        }
        return;
    }

    if (!propertyAssignment) {
        propertyAssignment = expression.addProperty({
            name,
            kind: StructureKind.PropertyAssignment,
            initializer: 'undefined',
        }) as PropertyAssignment;
    }

    propertyAssignment.setInitializer(JSON.stringify(value));
}

export function fieldLocationToKind(fieldLocation: PrismaDMMF.FieldLocation) {
    switch (fieldLocation) {
        case 'inputObjectTypes':
        case 'outputObjectTypes':
            return 'object';
        case 'enumTypes':
            return 'enum';
    }
    return fieldLocation;
}
