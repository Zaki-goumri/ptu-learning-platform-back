import React, { PropsWithChildren, ComponentType } from 'react';
export interface TabsProps extends PropsWithChildren {
    /**
     * Controls which Tab is currently displayed. It should be the same as an ID
     * of one of the tabs.
     */
    currentTab: string;
    /**
     * Called with Tab ID when the user clicks on a tab navigation button.
     */
    onChange?: (tabId: string) => void;
    /**
     * Whether tabs container should fill remaining space
     */
    fullWidth?: boolean;
    /**
     * Custom component to use as the Tabs header instead of default 'div'.
     */
    headerComponent?: ComponentType<PropsWithChildren<any>>;
    /**
     * Custom component to use as the Tab button instead of default 'button'.
     */
    buttonComponent?: ComponentType<PropsWithChildren<{
        onClick: () => void;
        active: boolean;
        tabId: string;
        role?: string;
    }>>;
    /**
     * Custom component to use as the Tabs content container instead of default 'div'.
     */
    contentComponent?: ComponentType<PropsWithChildren<{
        role?: string;
    }>>;
}
interface TabContextType {
    registerTab: (id: string, title: string) => void;
    unregisterTab: (id: string) => void;
    currentTab: string;
}
/**
 * Tabs component renders a tab navigation bar that lets the user select a Tab
 * to display below. Children of the selected Tab are then rendered below the
 * navigation bar.
 */
export declare const Tabs: React.FC<TabsProps>;
export declare const TabContext: React.Context<TabContextType>;
export declare const useTabs: () => TabContextType;
export default Tabs;
