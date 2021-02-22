import assert from 'assert';
import {
    CallExpression,
    ExpressionStatement,
    Node,
    ObjectLiteralExpression,
    SourceFile,
} from 'ts-morph';

import { generateImport } from '../generate-import';
import { SchemaEnum } from '../types';
import { updateObjectProperty } from '../utils';

type GenerateEnumArgs = {
    enumerable: SchemaEnum & { documentation?: string };
    sourceFile: SourceFile;
};

export function generateEnum(args: GenerateEnumArgs) {
    const { enumerable, sourceFile } = args;

    generateImport({
        sourceFile,
        name: 'registerEnumType',
        moduleSpecifier: '@nestjs/graphql',
    });

    if (!sourceFile.getEnum(enumerable.name)) {
        sourceFile.addEnum({
            isExported: true,
            name: enumerable.name,
            members: enumerable.values.map(v => ({
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
            `registerEnumType(${enumerable.name}, { name: '${enumerable.name}', description: undefined })`,
        ]) as ExpressionStatement[];
    }

    assert(statement);

    const objectLiteralExpression = (statement.getExpression() as CallExpression)
        .getArguments()
        .find(x => Node.isObjectLiteralExpression(x)) as ObjectLiteralExpression;

    updateObjectProperty({
        expression: objectLiteralExpression,
        name: 'description',
        value: enumerable.documentation,
    });
}
