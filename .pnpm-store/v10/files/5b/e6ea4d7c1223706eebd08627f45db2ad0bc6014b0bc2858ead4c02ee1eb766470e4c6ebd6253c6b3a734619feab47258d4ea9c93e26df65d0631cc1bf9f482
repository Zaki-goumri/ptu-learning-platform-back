import React from 'react';
import { BasePropertyJSON } from '../../../interfaces/index.js';
export type PropertyHeaderProps = {
    property: BasePropertyJSON;
    /**
     * Property which should be treated as main property.
     */
    titleProperty: BasePropertyJSON;
    /**
     * currently selected direction. Either 'asc' or 'desc'.
     */
    direction?: 'asc' | 'desc';
    /**
     * currently selected field by which list is sorted.
     */
    sortBy?: string;
    display?: string | Array<string>;
};
declare const PropertyHeader: React.FC<PropertyHeaderProps>;
declare const OverridablePropertyHeader: React.ComponentType<PropertyHeaderProps & {
    OriginalComponent?: React.ComponentType<PropertyHeaderProps> | undefined;
}>;
export { OverridablePropertyHeader as default, OverridablePropertyHeader as PropertyHeader, PropertyHeader as OriginalPropertyHeader, };
