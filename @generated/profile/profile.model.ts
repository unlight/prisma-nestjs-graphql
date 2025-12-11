import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {

    @Field(() => ID, {deprecationReason:'Use new name instead',nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    dummy!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
