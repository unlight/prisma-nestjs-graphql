import { kebabCase } from 'lodash';
import pluralize from 'pluralize';
import pupa from 'pupa';

import { featureName } from './feature-name';

type GenerateFileNameArgs = {
    type: string;
    name: string;
    modelNames: string[];
    template: string;
    feature?: string;
};

export function generateFileName(args: GenerateFileNameArgs) {
    const { template, type, name, modelNames } = args;

    return pupa(template, {
        type,
        get feature() {
            let feature = args.feature;
            if (!feature) {
                feature = featureName({ modelNames, name, fallback: 'prisma' });
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
