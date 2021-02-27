import { DMMF, EventArguments } from '../types';

export function modelData(model: DMMF.Model, args: EventArguments) {
    const { modelNames, models } = args;
    modelNames.push(model.name);
    models.set(model.name, model);
}
