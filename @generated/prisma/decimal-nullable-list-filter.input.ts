import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';

@InputType()
export class DecimalNullableListFilter {

    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    equals?: Array<Decimal>;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    has?: Decimal;

    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    hasEvery?: Array<Decimal>;

    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    hasSome?: Array<Decimal>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
