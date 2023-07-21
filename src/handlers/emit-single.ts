import { Prisma } from '@prisma/client';
import AwaitEventEmitter from 'await-event-emitter';
import { PropertyDeclarationStructure } from 'ts-morph';

export function emitSingle(emitter: AwaitEventEmitter) {
  emitter.on('ClassProperty', classProperty);
}

function classProperty(
  property: PropertyDeclarationStructure,
  eventArguments: {
    location: Prisma.DMMF.FieldLocation;
    isList: boolean;
    propertyType: string[];
  },
) {
  const { location, isList, propertyType } = eventArguments;
  if (['inputObjectTypes', 'outputObjectTypes'].includes(location) && !isList) {
    const types = propertyType.filter(t => t !== 'null');
    property.type = types.map(t => `InstanceType<typeof ${t}>`).join(' | ');
    if (types.length !== propertyType.length) {
      // If null was removed
      property.type += ' | null';
    }
  }
}
