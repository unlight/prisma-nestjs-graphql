import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {
        nullable: true,
        description: undefined,
    })
    set?: Role | null;
}
