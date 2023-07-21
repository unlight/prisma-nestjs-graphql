import { FieldLocation } from '../types';

/**
 * Returns typescript property type.
 */
export function getPropertyType(args: {
  type: string;
  location: FieldLocation;
}): string[] {
  const { type, location } = args;
  switch (type) {
    case 'Float':
    case 'Int': {
      return ['number'];
    }
    case 'String': {
      return ['string'];
    }
    case 'Boolean': {
      return ['boolean'];
    }
    case 'DateTime': {
      return ['Date', 'string'];
    }
    case 'Decimal': {
      return ['Prisma.Decimal'];
    }
    case 'Json': {
      return ['any'];
    }
    case 'Null': {
      return ['null'];
    }
    case 'Bytes': {
      return ['Buffer'];
    }
    case 'BigInt': {
      return ['bigint', 'number'];
    }
  }
  if (['inputObjectTypes', 'outputObjectTypes'].includes(location)) {
    return [type];
  }
  if (location === 'enumTypes') {
    return [`keyof typeof ${type}`];
  }
  if (location === 'scalar') {
    return [type];
  }

  return ['unknown'];
}
