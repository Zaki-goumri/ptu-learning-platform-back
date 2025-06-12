import { ComponentType } from 'react';
import { OverridableComponent } from '../utils/overridable-component.js';
/**
 * @private
 *
 * @classdesc
 * Overrides one of the AdminJS core components when user passes it's name to ComponentLoader
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * new ComponentLoader().override('SidebarFooter', MySidebarFooter)
 */
declare function allowOverride<P extends Record<string, unknown>>(OriginalComponent: ComponentType<P>, name: OverridableComponent): ComponentType<P & {
    OriginalComponent?: ComponentType<P>;
}>;
export { allowOverride as default, allowOverride, };
