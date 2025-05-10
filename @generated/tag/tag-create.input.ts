import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedManyWithoutTagsInput } from '../article/article-create-nested-many-without-tags.input';
import { Type } from 'class-transformer';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ArticleCreateNestedManyWithoutTagsInput, {nullable:true})
    @Type(() => ArticleCreateNestedManyWithoutTagsInput)
    articles?: ArticleCreateNestedManyWithoutTagsInput;
}
