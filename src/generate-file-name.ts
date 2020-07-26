import pupa from 'pupa';
import { toKebab } from 'to-kebab';

export type FileType = 'model' | 'input' | 'enum';

const splitKeywords = [
    'WhereInput',
    'ScalarWhereInput',
    'OrderByInput',
    'WhereUniqueInput',
    'CreateInput',
    'UpdateInput',
    'UpsertWith',
    'UpsertWithout',
    'UpdateWith',
    'UpdateMany',
    'CreateMany',
    'CreateWithout',
    'UpdateOneWithout',
    'ManyWithout',
    'CreateOneWithout',
    'UpdateOneRequiredWithout',
    'Filter',
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
    if (type === 'input' && dasherizedName.endsWith('-input')) {
        dasherizedName = dasherizedName.slice(0, -6);
    }

    return pupa(template, {
        feature,
        type,
        name,
        dasherizedName,
    });
}
