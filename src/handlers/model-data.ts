import { createFieldSettings, FieldSettings } from '../helpers/field-settings';
import { DMMF, EventArguments, Field } from '../types';

export function modelData(model: DMMF.Model, args: EventArguments) {
    const { config, modelNames, models, modelFields, fieldSettings } = args;
    modelNames.push(model.name);
    models.set(model.name, model);

    const modelFieldsValue = new Map<string, Field>();
    modelFields.set(model.name, modelFieldsValue);

    const fieldSettingsValue = new Map<string, FieldSettings>();
    fieldSettings.set(model.name, fieldSettingsValue);

    for (const field of model.fields) {
        if (field.documentation) {
            const { documentation, result } = createFieldSettings({
                text: field.documentation,
                config,
            });
            field.documentation = documentation;
            fieldSettingsValue.set(field.name, result);
        }
        modelFieldsValue.set(field.name, field);
    }
}
