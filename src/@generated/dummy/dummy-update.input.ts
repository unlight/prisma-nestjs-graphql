import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class DummyUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
    floaty?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    int?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    float?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableBytesFieldUpdateOperationsInput, { nullable: true })
    bytes?: NullableBytesFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
    decimal?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
    bigInt?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, { nullable: true })
    json?: any;
}
