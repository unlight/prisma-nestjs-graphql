import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDummyArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;
}
