import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    
    
    
    
}


registerEnumType(Role, { name: 'Role', description: "user access control", valuesMap: {
  USER: {
    description: "default user access control"
  },
  NINGA: {
    description: "have full access control"
  },
  ADMIN: {
    deprecationReason: "Use USER instead"
  }
} })
