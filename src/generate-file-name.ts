import pupa from 'pupa';
import { toKebab } from 'to-kebab';

export type FileType = 'model' | 'input' | 'enum';

const splitKeywords = [
    'CreateInput',
    'CreateMany',
    'CreateOneWithout',
    'CreateWithout',
    'DistinctField',
    'Filter',
    'ManyWithout',
    'OrderByInput',
    'RelationFilter',
    'ListRelationFilter',
    'ScalarWhereInput',
    'UpdateInput',
    'UpdateMany',
    'UpdateOneRequiredWithout',
    'UpdateOneWithout',
    'UpdateWith',
    'UpsertWith',
    'UpsertWithout',
    'WhereInput',
    'WhereUniqueInput',
].sort((a, b) => b.length - a.length);

type GenerateFileNameArgs = {
    type: FileType;
    name: string;
    models: string[];
    template?: string;
};

export function generateFileName(args: GenerateFileNameArgs) {
    const { type, name, models } = args;
    const template = args.template || '{feature}/{dasherizedName}.{type}.ts';
    let feature = 'prisma';
    for (const keyword of splitKeywords) {
        const [test] = name.split(keyword, 1);
        if (models.includes(test)) {
            feature = toKebab(test);
            break;
        }
    }
    let dasherizedName = toKebab(name);

    for (const suffix of ['input', 'enum']) {
        const ending = `-${suffix}`;
        if (type === suffix && dasherizedName.endsWith(ending)) {
            dasherizedName = dasherizedName.slice(0, -ending.length);
        }
    }

    return pupa(template, {
        feature,
        type,
        name,
        dasherizedName,
    });
}
