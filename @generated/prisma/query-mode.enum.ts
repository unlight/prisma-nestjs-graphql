import { registerEnumType } from '@nestjs/graphql';

export enum QueryMode {
    
    
}


registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
