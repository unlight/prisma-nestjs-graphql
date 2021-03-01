import { kebabCase } from 'lodash';
import pluralize from 'pluralize';
import pupa from 'pupa';

import { getModelName } from './get-model-name';

export function generateFileName(args: {
    type: string;
    name: string;
    modelNames: string[];
    template: string;
}) {
    const { template, type, name, modelNames } = args;

    return pupa(template, {
        type,
        get model() {
            const result = getModelName({ modelNames, name, fallback: 'prisma' });
            return kebabCase(result);
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
