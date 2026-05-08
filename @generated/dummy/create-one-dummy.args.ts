import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { DummyCreateInput } from './dummy-create.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDummyArgs {
  @Field(() => DummyCreateInput, { nullable: false })
  @Type(() => DummyCreateInput)
  data!: Identity<DummyCreateInput>;
}
