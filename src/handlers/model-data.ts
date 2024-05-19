import { createObjectSettings, ObjectSettings } from '../helpers/object-settings';
import { EventArguments, Field, Model } from '../types';

export function modelData(model: Model, args: EventArguments) {
  const {
    config,
    modelNames,
    models,
    modelFields,
    fieldSettings,
    classTransformerTypeModels,
  } = args;
  modelNames.push(model.name);
  models.set(model.name, model);

  const modelFieldsValue = new Map<string, Field>();
  modelFields.set(model.name, modelFieldsValue);

  const fieldSettingsValue = new Map<string, ObjectSettings>();
  fieldSettings.set(model.name, fieldSettingsValue);

  for (const field of model.fields) {
    if (field.documentation) {
      const { documentation, settings } = createObjectSettings({
        text: field.documentation,
        config,
      });
      field.documentation = documentation;
      fieldSettingsValue.set(field.name, settings);
    }
    modelFieldsValue.set(field.name, field);
  }

  if (model.fields.some(field => field.type === 'Decimal')) {
    classTransformerTypeModels.add(model.name);
  }
}
