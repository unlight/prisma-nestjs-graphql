import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class NullableBytesFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: Prisma.Bytes;
}
