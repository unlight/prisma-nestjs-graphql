import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { DateTimeFilter } from './date-time-filter.input.ts';

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;

  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;

  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;

  @Field(() => Date, { nullable: true })
  lt?: Date | string;

  @Field(() => Date, { nullable: true })
  lte?: Date | string;

  @Field(() => Date, { nullable: true })
  gt?: Date | string;

  @Field(() => Date, { nullable: true })
  gte?: Date | string;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  not?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  _min?: Identity<DateTimeFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  _max?: Identity<DateTimeFilter>;
}
