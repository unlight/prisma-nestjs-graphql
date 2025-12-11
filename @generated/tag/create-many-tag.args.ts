import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagCreateManyInput } from './tag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTagArgs {

    @Field(() => [TagCreateManyInput], {nullable:false})
    @Type(() => TagCreateManyInput)
    data!: Array<TagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
