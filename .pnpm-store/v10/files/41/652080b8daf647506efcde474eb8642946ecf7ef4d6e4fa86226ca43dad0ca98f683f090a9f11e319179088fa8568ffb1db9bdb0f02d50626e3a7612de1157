import React from 'react';
import { PropertyJSON } from '../../../interfaces/property-json/index.js';
import { EditPropertyProps } from '../base-property-props.js';
import { RecordError } from '../../../../backend/utils/errors/index.js';
export type EditKeyValuePairProps = {
    onKeyChange: (key: string, newKey: string) => void;
    onValueChange: (key: string, newValue: string) => void;
    onRemoveItem: (key: string) => void;
    objectValue: string;
    objectKey: string;
    property: PropertyJSON;
    error?: RecordError;
};
declare const Edit: React.FC<EditPropertyProps>;
export default Edit;
