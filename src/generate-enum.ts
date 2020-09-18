import assert from 'assert';
import {
    CallExpression,
    ExpressionStatement,
    Node,
    ObjectLiteralExpression,
    SourceFile,
} from 'ts-morph';

import { generateGraphqlImport } from './generate-graphql-import';
import { PrismaDMMF } from './types';
import { updateObjectProperty } from './update-object-property';

type GenerateEnumArgs = {
    enumerable: PrismaDMMF.Enum;
    sourceFile: SourceFile;
};

export function generateEnum(args: GenerateEnumArgs) {
    const { enumerable, sourceFile } = args;

    generateGraphqlImport({
        sourceFile,
        name: 'registerEnumType',
        moduleSpecifier: '@nestjs/graphql',
    });

    if (!sourceFile.getEnum(enumerable.name)) {
        sourceFile.addEnum({
            isExported: true,
            name: enumerable.name,
            members: enumerable.values.map((v) => ({ name: v, initializer: JSON.stringify(v) })),
        });
    }

    let statement = sourceFile.getStatement(
        (s) =>
            Node.isExpressionStatement(s) &&
            Node.isCallExpression(s.getExpression()) &&
            s
                .getExpression()
                .getFirstChild(
                    (node) => Node.isIdentifier(node) && node.getText() === 'registerEnumType',
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
        .find((x) => Node.isObjectLiteralExpression(x)) as ObjectLiteralExpression;

    updateObjectProperty({
        expression: objectLiteralExpression,
        name: 'description',
        value: enumerable.documentation,
    });
}
