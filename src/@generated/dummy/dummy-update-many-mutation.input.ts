import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class DummyUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {
        nullable: true,
    })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBytesFieldUpdateOperationsInput, {
        nullable: true,
    })
    bytes?: NullableBytesFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {
        nullable: true,
    })
    decimal?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {
        nullable: true,
    })
    bigInt?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => String, {
        nullable: true,
    })
    json?: any;
}
