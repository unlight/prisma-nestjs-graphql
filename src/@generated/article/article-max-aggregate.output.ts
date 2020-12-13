import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleMaxAggregate {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @Field(() => String, {
    nullable: true,
  })
  body?: string;

  @Field(() => String, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => String, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => Int, {
    nullable: true,
  })
  favoritesCount?: number;

  @Field(() => String, {
    nullable: true,
  })
  authorId?: string;

  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean;
}
