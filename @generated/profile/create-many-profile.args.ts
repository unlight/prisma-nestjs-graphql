import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileCreateManyInput } from './profile-create-many.input';

@ArgsType()
export class CreateManyProfileArgs {
    @Field(() => [ProfileCreateManyInput], { nullable: false })
    data!: Array<ProfileCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
