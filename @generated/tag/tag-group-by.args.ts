import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';
import { TagOrderByWithAggregationInput } from './tag-order-by-with-aggregation.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';

@ArgsType()
export class TagGroupByArgs {

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithAggregationInput>;

    @Field(() => [TagScalarFieldEnum], {nullable:false})
    by!: Array<`${TagScalarFieldEnum}`>;

    @Field(() => TagScalarWhereWithAggregatesInput, {nullable:true})
    having?: TagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: TagCountAggregateInput;

    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: TagMaxAggregateInput;
}
