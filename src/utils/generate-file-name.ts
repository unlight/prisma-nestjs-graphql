import { kebabCase } from 'lodash';
import pluralize from 'pluralize';
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
    const template = args.template || '{feature}/{name}.{type}.ts';

    return pupa(template, {
        type,
        get feature() {
            let feature = args.feature;
            if (!feature) {
                feature = featureName({ models, name, fallback: 'prisma' });
            }
            return kebabCase(feature);
        },
        get name() {
            let result = kebabCase(name);
            for (const suffix of ['input', 'args', 'enum']) {
                const ending = `-${suffix}`;
                if (type === suffix && result.endsWith(ending)) {
                    result = result.slice(0, -ending.length);
                }
            }
            return result;
        },
        plural: {
            get type() {
                return pluralize(type);
            },
        },
    });
}
