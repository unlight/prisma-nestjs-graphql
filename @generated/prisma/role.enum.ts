import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    NINGA = "NINGA",
    ADMIN = "ADMIN",
    REVIEWER = "REVIEWER"
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
