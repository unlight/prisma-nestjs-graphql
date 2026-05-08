import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { DummyUpdateManyMutationInput } from './dummy-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { DummyWhereInput } from './dummy-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyDummyArgs {
  @Field(() => DummyUpdateManyMutationInput, { nullable: false })
  @Type(() => DummyUpdateManyMutationInput)
  data!: Identity<DummyUpdateManyMutationInput>;

  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: Identity<DummyWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
