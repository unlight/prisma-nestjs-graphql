import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NullableBytesFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: Uint8Array;
}
