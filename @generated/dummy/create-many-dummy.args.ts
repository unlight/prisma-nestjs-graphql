import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyCreateManyInput } from './dummy-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDummyArgs {

    @Field(() => [DummyCreateManyInput], {nullable:false})
    @Type(() => DummyCreateManyInput)
    data!: Array<DummyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
