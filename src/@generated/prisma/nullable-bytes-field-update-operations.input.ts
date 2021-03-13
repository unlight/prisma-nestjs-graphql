import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableBytesFieldUpdateOperationsInput {
    @Field(() => String, { nullable: true })
    set?: Buffer;
}
