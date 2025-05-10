import { registerEnumType } from '@nestjs/graphql';

export enum NullsOrder {
    
    
}


registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
