import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    name?: string;
}
