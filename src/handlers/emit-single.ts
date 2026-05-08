import type { PropertyDeclarationStructure } from 'ts-morph';

import { partition } from '../helpers/lodash.ts';
import type { DMMF, TAwaitEventEmitter } from '../types.ts';

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
    // TODO: Use relation type here
    const mappedInstanceofTypes = instanceofTypes.map(
      t => `InstanceType<typeof ${t}>`,
    );

    property.type = [...mappedInstanceofTypes, ...safeTypes].join(' | ');
  }
}
