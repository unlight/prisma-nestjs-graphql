import { generateClass } from '../helpers/generate-class';
import { generateDecorator } from '../helpers/generate-decorator';
import { generateImport } from '../helpers/generate-import';
import { generateProperty } from '../helpers/generate-property';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getGraphqlInputType } from '../helpers/get-graphql-input-type';
import { getGraphqlType } from '../helpers/get-graphql-type';
import { getPropertyType } from '../helpers/get-property-type';
import { EventArguments, InputType } from '../types';

export function inputType(
    args: EventArguments & {
        inputType: InputType;
        fileType: string;
        classDecoratorName: string;
    },
) {
    const {
        inputType,
        fileType,
        classDecoratorName,
        getSourceFile,
        config,
        eventEmitter,
    } = args;

    const sourceFile = getSourceFile({
        name: inputType.name,
        type: fileType,
    });

    const classDeclaration = generateClass({
        decorator: {
            name: classDecoratorName,
        },
        sourceFile,
        name: inputType.name,
    });

    generateImport({
        sourceFile,
        name: 'Field',
        moduleSpecifier: '@nestjs/graphql',
    });

    for (const field of inputType.fields) {
        eventEmitter.emitSync('beforeGenerateField', field, args);

        const { inputTypes, isRequired } = field;
        const graphqlInputType = getGraphqlInputType(inputTypes);
        const { isList, location, type } = graphqlInputType;
        const typeName = String(type);
        const customType = config.types[typeName];

        const propertyType = getPropertyType({
            location,
            type: typeName,
        });

        const propertyDeclaration = generateProperty({
            classDeclaration,
            name: field.name,
            isNullable: !isRequired,
            propertyType,
            isList,
        });

        const graphqlType = getGraphqlType({
            location,
            type: typeName,
        });

        const graphqlImport = getGraphqlImport({
            sourceFile,
            location,
            name: graphqlType,
            customType,
            getSourceFile,
        });

        //     console.log({
        //         'inputType.name': inputType.name,
        //         'field.name': field.name,
        //         typeName,
        //         field,
        //         graphqlInputType,
        //         propertyType,
        //         graphqlType,
        //         graphqlImport,
        //     });

        if (graphqlImport.name !== inputType.name && graphqlImport.specifier) {
            generateImport({
                sourceFile,
                name: graphqlImport.name,
                moduleSpecifier: graphqlImport.specifier,
            });
        }

        generateDecorator({
            propertyDeclaration,
            graphqlType,
            isList,
            isNullable: !isRequired,
        });
    }
}
