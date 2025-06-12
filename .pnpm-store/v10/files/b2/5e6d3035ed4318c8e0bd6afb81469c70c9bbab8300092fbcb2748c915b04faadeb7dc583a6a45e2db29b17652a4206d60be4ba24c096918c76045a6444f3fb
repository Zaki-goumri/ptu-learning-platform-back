import React from 'react';
import { RecordJSON, ResourceJSON } from '../../../interfaces/index.js';
import { ActionResponse } from '../../../../backend/actions/action.interface.js';
export type RecordInListProps = {
    resource: ResourceJSON;
    record: RecordJSON;
    actionPerformed?: (action: ActionResponse) => any;
    isLoading?: boolean;
    onSelect?: (record: RecordJSON) => void;
    isSelected?: boolean;
};
declare const RecordInList: React.FC<RecordInListProps>;
declare const OverridableRecordInList: React.ComponentType<RecordInListProps & {
    OriginalComponent?: React.ComponentType<RecordInListProps> | undefined;
}>;
export { OverridableRecordInList as default, OverridableRecordInList as RecordInList, RecordInList as OriginalRecordInList, };
