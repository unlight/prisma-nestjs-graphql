import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DummyUpdatefriendsInput } from '../prisma/dummy-updatefriends.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class DummyUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    created?: DateTimeFieldUpdateOperationsInput;

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

    @Field(() => DummyUpdatefriendsInput, { nullable: true })
    friends?: DummyUpdatefriendsInput;
}
