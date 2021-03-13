import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class NullableEnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, { nullable: true })
    set?: Role;
}
