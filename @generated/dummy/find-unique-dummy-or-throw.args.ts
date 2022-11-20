import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDummyOrThrowArgs {
  @Field(() => DummyWhereUniqueInput, { nullable: false })
  @Type(() => DummyWhereUniqueInput)
  where!: DummyWhereUniqueInput;
}
