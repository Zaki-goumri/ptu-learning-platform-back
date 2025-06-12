import React from 'react';
import { IAllProps } from '@tinymce/tinymce-react';
interface TinymceEditorOptions extends Omit<Partial<IAllProps>, 'onEditorChange'> {
    contentStyle?: string | null;
    height?: string | null;
}
export interface TinymceEditorProps {
    value: string;
    onChange: (value: string) => void;
    options?: TinymceEditorOptions;
}
declare const TinyMCE: React.FC<TinymceEditorProps>;
export { TinyMCE };
export default TinyMCE;
