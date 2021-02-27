import assert from 'assert';
import {
    CallExpression,
    ExpressionStatement,
    Node,
    ObjectLiteralExpression,
} from 'ts-morph';

import { generateImport } from '../helpers/generate-import';
import { updateObjectProperty } from '../helpers/update-object-property';
import { EventArguments, SchemaEnum } from '../types';

export function registerEnum(enumType: SchemaEnum, args: EventArguments) {
    const { getSourceFile, enums } = args;
    const dataModelEnum = enums[enumType.name];
    const sourceFile = getSourceFile({
        name: enumType.name,
        type: 'enum',
    });

    generateImport({
        sourceFile,
        name: 'registerEnumType',
        moduleSpecifier: '@nestjs/graphql',
    });

    if (!sourceFile.getEnum(enumType.name)) {
        sourceFile.addEnum({
            isExported: true,
            name: enumType.name,
            members: enumType.values.map(v => ({
                name: v,
                initializer: JSON.stringify(v),
            })),
        });
    }

    let statement = sourceFile.getStatement(
        s =>
            Node.isExpressionStatement(s) &&
            Node.isCallExpression(s.getExpression()) &&
            s
                .getExpression()
                .getFirstChild(
                    node =>
                        Node.isIdentifier(node) &&
                        node.getText() === 'registerEnumType',
                ) != undefined,
    ) as ExpressionStatement | undefined;

    if (!statement) {
        [statement] = sourceFile.addStatements([
            '\n',
            `registerEnumType(${enumType.name}, { name: '${enumType.name}', description: undefined })`,
        ]) as ExpressionStatement[];
    }

    assert(statement);

    const objectLiteralExpression = (statement.getExpression() as CallExpression)
        .getArguments()
        .find(x => Node.isObjectLiteralExpression(x)) as ObjectLiteralExpression;

    updateObjectProperty({
        expression: objectLiteralExpression,
        name: 'description',
        value: dataModelEnum?.documentation,
    });
}
