import AwaitEventEmitter from 'await-event-emitter';
import { partition } from 'lodash';
import { PropertyDeclarationStructure } from 'ts-morph';

import { DMMF } from '../types';

export function emitSingle(emitter: AwaitEventEmitter) {
  emitter.on('ClassProperty', classProperty);
}

function classProperty(
  property: PropertyDeclarationStructure,
  eventArguments: {
    location: DMMF.FieldLocation;
    isList: boolean;
    propertyType: string[];
  },
) {
  const { location, isList, propertyType } = eventArguments;
  if (['inputObjectTypes', 'outputObjectTypes'].includes(location) && !isList) {
    const [safeTypes, instanceofTypes] = partition(
      propertyType,
      t => t === 'null' || t.startsWith('Prisma.'),
    );
    const mappedInstanceofTypes = instanceofTypes.map(t => `InstanceType<typeof ${t}>`);

    property.type = [...mappedInstanceofTypes, ...safeTypes].join(' | ');
  }
}
