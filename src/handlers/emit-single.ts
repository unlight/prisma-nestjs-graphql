import lodash from 'lodash';
import type { PropertyDeclarationStructure } from 'ts-morph';

import type { DMMF, TAwaitEventEmitter } from '../types.ts';

const { partition } = lodash;

export function emitSingle(emitter: TAwaitEventEmitter) {
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
  const { isList, location, propertyType } = eventArguments;
  if (['inputObjectTypes', 'outputObjectTypes'].includes(location) && !isList) {
    const [safeTypes, instanceofTypes] = partition(
      propertyType,
      t => t === 'null' || t.startsWith('Prisma.'),
    );
    const mappedInstanceofTypes = instanceofTypes.map(t => `InstanceType<typeof ${t}>`);

    property.type = [...mappedInstanceofTypes, ...safeTypes].join(' | ');
  }
}
