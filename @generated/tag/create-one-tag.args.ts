import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagCreateInput } from './tag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTagArgs {

    @Field(() => TagCreateInput, {nullable:false})
    @Type(() => TagCreateInput)
    data!: TagCreateInput;
}
