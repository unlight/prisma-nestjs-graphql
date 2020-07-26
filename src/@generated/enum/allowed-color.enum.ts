import { registerEnumType } from '@nestjs/graphql';

export enum AllowedColor {
    RED,
    GREEN,
    BLUE,
}

/**
 * Usage
 * @Field(type => AllowedColor)
 * favoriteColor: AllowedColor;
 */
registerEnumType(AllowedColor, { name: 'AllowedColor', description: '' });
