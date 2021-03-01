import { isEmpty } from 'lodash';

import { DMMF, EventArguments, Field, FieldMeta } from '../types';

export function modelData(model: DMMF.Model, args: EventArguments) {
    const { modelNames, models, modelFields } = args;
    modelNames.push(model.name);
    models.set(model.name, model);

    const modelFieldsValue = new Map<string, Field>();
    modelFields.set(model.name, modelFieldsValue);
    for (const field of model.fields) {
        modelFieldsValue.set(field.name, {
            ...field,
            ...getFieldMeta(field.documentation),
        });
    }
}

function getFieldMeta(documentation: string | undefined) {
    const meta: FieldMeta = {
        hideOutput: false,
    };

    if (!documentation) {
        return {
            documentation,
            meta,
        };
    }

    const lines = documentation.split('\\n');
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if (
            /@TypeGraphQL\.omit\(output:\s*true\)/.test(line) ||
            /@HideField\(\)/.test(line)
        ) {
            meta.hideOutput = true;
            lines.splice(index, 1);
        }
    }

    return {
        documentation: isEmpty(lines) ? undefined : lines.join('\\n'),
        meta,
    };
}
