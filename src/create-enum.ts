import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';

export function createEnum(inputType: PrismaDMMF.SchemaArgInputType): PrismaDMMF.Enum {
    switch (inputType.type) {
        case 'SortOrder':
            return { name: inputType.type, values: ['asc', 'desc'] };
    }
    throw new Error(`Cannot create enum ${inputType.type} from input type`);
}
