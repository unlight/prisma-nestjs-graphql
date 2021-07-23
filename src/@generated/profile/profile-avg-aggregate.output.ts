import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;
}
