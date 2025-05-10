import { registerEnumType } from '@nestjs/graphql';

export enum TransactionIsolationLevel {
    
    
    
    
}


registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
