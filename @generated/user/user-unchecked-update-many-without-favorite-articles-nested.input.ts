import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpdateManyWithWhereWithoutFavoriteArticlesInput } from './user-update-many-with-where-without-favorite-articles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput {
  @Field(() => [UserCreateWithoutFavoriteArticlesInput], { nullable: true })
  @Type(() => UserCreateWithoutFavoriteArticlesInput)
  create?: Array<UserCreateWithoutFavoriteArticlesInput>;

  @Field(() => [UserCreateOrConnectWithoutFavoriteArticlesInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFavoriteArticlesInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

  @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput>;

  @Field(() => [UserUpdateManyWithWhereWithoutFavoriteArticlesInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutFavoriteArticlesInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFavoriteArticlesInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}
