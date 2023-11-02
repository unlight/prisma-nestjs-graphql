import { registerEnumType } from '@nestjs/graphql';

export enum TagOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(TagOrderByRelevanceFieldEnum, { name: 'TagOrderByRelevanceFieldEnum', description: undefined })
