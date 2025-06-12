import React from 'react';
import { CurrentAdmin } from '../../../current-admin.interface.js';
export type LoggedInProps = {
    session: CurrentAdmin;
    paths: {
        logoutPath: string;
    };
};
declare const LoggedIn: React.FC<LoggedInProps>;
declare const OverridableLoggedIn: React.ComponentType<LoggedInProps & {
    OriginalComponent?: React.ComponentType<LoggedInProps> | undefined;
}>;
export { OverridableLoggedIn as default, OverridableLoggedIn as LoggedIn, LoggedIn as OriginalLoggedIn, };
