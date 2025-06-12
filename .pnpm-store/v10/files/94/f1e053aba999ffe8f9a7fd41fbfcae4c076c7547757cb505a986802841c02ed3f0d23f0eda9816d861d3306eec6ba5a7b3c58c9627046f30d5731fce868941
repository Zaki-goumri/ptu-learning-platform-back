import React from 'react';
import { SetNoticeProgress } from '../../store/actions/set-notice-progress.js';
import { type NoticeMessageInState } from '../../store/index.js';
export type NotifyProgress = (options: SetNoticeProgress) => void;
export type NoticeElementProps = {
    notice: NoticeMessageInState;
    drop: () => void;
    notifyProgress: NotifyProgress;
};
export type NoticeElementState = {
    progress: number;
};
type NoticeBoxPropsFromState = {
    notices: Array<NoticeMessageInState>;
};
type NoticeBoxDispatchFromState = {
    drop: (noticeId: string) => void;
    notifyProgress: NotifyProgress;
};
declare const ConnectedNoticeBox: import("react-redux").ConnectedComponent<React.FC<NoticeBoxPropsFromState & NoticeBoxDispatchFromState>, {
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
declare const OverridableConnectedNoticeBox: React.ComponentType<{
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
} & {
    OriginalComponent?: React.ComponentType<{
        context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
        store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
    }> | undefined;
}>;
export { OverridableConnectedNoticeBox as NoticeBox, OverridableConnectedNoticeBox as default, ConnectedNoticeBox as OriginalNoticeBox, };
