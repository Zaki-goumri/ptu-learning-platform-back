import { type NoticeMessage } from '../../interfaces/noticeMessage.interface.js';
import { AddNoticeResponse } from '../actions/add-notice.js';
import { DropNoticeResponse } from '../actions/drop-notice.js';
import { SetNoticeProgressResponse } from '../actions/set-notice-progress.js';
export interface NoticeMessageInState extends NoticeMessage {
    id: string;
    progress: number;
}
export type NoticesInState = Array<NoticeMessageInState>;
type NoticeActionResponse = AddNoticeResponse | DropNoticeResponse | SetNoticeProgressResponse;
export declare const noticesReducer: (state: NoticesInState | undefined, action: NoticeActionResponse) => NoticesInState;
export {};
