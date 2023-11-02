import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-client';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDummyArgs {

    @Field(() => DummyWhereUniqueInput, {nullable:false})
    @Type(() => DummyWhereUniqueInput)
    where!: Prisma.AtLeast<DummyWhereUniqueInput, 'id'>;
}
