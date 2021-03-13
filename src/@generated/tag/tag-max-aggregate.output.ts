import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    name?: string;
}
