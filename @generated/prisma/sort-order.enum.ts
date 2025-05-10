import { registerEnumType } from '@nestjs/graphql';

export enum SortOrder {
    
    
}


registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
