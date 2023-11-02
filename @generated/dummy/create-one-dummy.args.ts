import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyCreateInput } from './dummy-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDummyArgs {

    @Field(() => DummyCreateInput, {nullable:false})
    @Type(() => DummyCreateInput)
    data!: DummyCreateInput;
}
