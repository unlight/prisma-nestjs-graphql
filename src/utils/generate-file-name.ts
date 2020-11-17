import { kebabCase } from 'lodash';
import pupa from 'pupa';

import { featureName } from './feature-name';

type GenerateFileNameArgs = {
    type: string;
    name: string;
    models: string[];
    template?: string;
    feature?: string;
};

export function generateFileName(args: GenerateFileNameArgs) {
    const { type, name, models } = args;
    const template = args.template || '{feature}/{dasherizedName}.{type}.ts';
    let feature = args.feature || featureName({ models, name, fallback: 'prisma' });
    feature = kebabCase(feature);
    let dasherizedName = kebabCase(name);

    for (const suffix of ['input', 'args', 'enum']) {
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
