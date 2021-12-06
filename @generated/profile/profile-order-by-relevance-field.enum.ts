import { registerEnumType } from '@nestjs/graphql';

export enum ProfileOrderByRelevanceFieldEnum {
    userId = 'userId',
    dummy = 'dummy',
}

registerEnumType(ProfileOrderByRelevanceFieldEnum, {
    name: 'ProfileOrderByRelevanceFieldEnum',
    description: undefined,
});
