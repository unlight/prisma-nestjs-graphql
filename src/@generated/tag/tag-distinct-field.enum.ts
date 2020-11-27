import { registerEnumType } from '@nestjs/graphql';

export enum TagDistinctFieldEnum {
    id = 'id',
    name = 'name',
}

registerEnumType(TagDistinctFieldEnum, { name: 'TagDistinctFieldEnum' });
