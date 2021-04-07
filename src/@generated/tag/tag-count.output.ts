import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagCount {
    @Field(() => Int, { nullable: false })
    articles!: number;
}
