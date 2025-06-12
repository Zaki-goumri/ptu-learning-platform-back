function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useEffect, useState } from 'react';
import template from 'lodash/template.js';
import { rgba } from 'polished';
import { styled, css } from "../../../build/utils/styled.js";
import { Box } from "../../atoms/box/index.js";
import { Label } from "../../atoms/label/index.js";
import { Text } from "../../atoms/text/index.js";
import { humanFileSize } from "../../utils/human-file-size.js";
import { MessageBox } from "../message-box/index.js";
import { DropZoneItem } from "./drop-zone-item.js";
import Image from "./drop-zone-image.js";

/**
 * @memberof DropZone
 * @alias FileSizeUnit
 */

const validateContentType = (mimeTypes, mimeType) => {
  if (!mimeTypes || !mimeTypes.length) {
    return true;
  }
  return mimeTypes.includes(mimeType);
};
const validateSize = (maxSize, size) => {
  if (!maxSize) {
    return true;
  }
  if (!size) {
    return true;
  }
  return +maxSize >= +size;
};
const inUnit = (size, unit) => {
  if (!size) {
    return '';
  }
  return humanFileSize(size, unit);
};
export const DROPZONE_DEFAULT_TRANSLATIONS = {
  placeholder: 'Drop your file here, or click to browse',
  acceptedSize: 'Max size: {{maxSize}}',
  acceptedType: 'Supports: {{mimeTypes}}',
  unsupportedSize: 'File {{fileName}} is too big',
  unsupportedType: 'File {{fileName}} has unsupported type: {{fileType}}'
};
const translate = (str, params) => {
  try {
    return template(str, {
      interpolate: /\{\{(\w+)\}\}/g
    })(params);
  } catch (e) {
    return str;
  }
};

/**
 * @returns {void}
 * @memberof DropZone
 * @alias OnDropDownChange
 */

/**
 * @memberof DropZone
 * @alias DropZoneProps
 */

const UploadInput = styled.input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`;
const StyledDropZone = styled(Box)`
  border: 1px dashed ${({
  theme
}) => theme.colors.inputBorder};
  border-radius: ${({
  theme
}) => theme.space.sm};
  position: relative;
  text-align: center;

  &:hover {
    border-color: ${({
  theme
}) => theme.colors.primary100};
  }

  ${({
  isDragging
}) => isDragging && css`
      background-color: ${({
  theme
}) => rgba(theme.colors.primary100, 0.05)};
    `}

  & ${Label} {
    color: ${({
  theme
}) => theme.colors.grey60};
    font-size: ${({
  theme
}) => theme.fontSizes.xs};
    padding-right: 4px;
    letter-spacing: 1px;
  }
`;

/**
 * @classdesc
 *
 * <img src="components/drop-zone.png" />
 *
 * DropZone which can be used for uploading files.
 *
 * ### usage
 *
 * ```javascript
 * import { DropZone, DropZoneProps } from '@adminjs/design-system'
 * ```
 *
 * how to use it in your custom component.tsx (TypesScript):
 * ```
 * import React, { useState } from 'react'
 * import { DropZone, Label, BasePropertyProps } from '@adminjs/design-system'
 * import { unflatten } from 'flat'
 *
 * const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
 *   const { property, record, onChange } = props
 *
 *   const onUpload = (files: FileList) => {
 *     const newRecord = {...record}
 *     const file = files.length && files[0]
 *
 *     onChange({
 *       ...newRecord,
 *       params: {
 *         ...newRecord.params,
 *         [property.name]: file,
 *       }
 *     })
 *     event.preventDefault()
 *   }
 *
 *   return (
 *     <Box>
 *       <Label>{property.label}</Label>
 *       <DropZone onChange={onUpload} />
 *     </Box>
 *   )
 * }
 * ```
 * @hideconstructor
 * @component
 * @subcategory Molecules
 * @see FileSizeUnit
 * @see OnDropDownChange
 * @see DropZoneProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropzone--default Storybook}
 * @example <caption>Single file with validation</caption>
 * const maxSize = 1024 * 100
 * const mimeTypes = ['application/pdf']
 * const onUpload = (files) => { alert(files,length ? files[0].name : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     onChange={onUpload}
 *     validate= { { maxSize, mimeTypes } }
 *   />
 * </Box>
 * )
 *
 * @example <caption>Multi file of photos</caption>
 * const mimeTypes = ['image/png']
 * const onUpload = (files) => { alert(files.length ? files.length : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     multiple
 *     onChange={onUpload}
 *     validate= { { mimeTypes } }
 *   />
 * </Box>
 * )
 * @section design-system
 */
const DropZone = props => {
  const {
    validate,
    onChange,
    multiple,
    files: filesFromProps,
    uploadLimitIn,
    translations,
    ...other
  } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [filesToUpload, setFilesToUpload] = useState(filesFromProps ?? []);
  const t = {
    ...DROPZONE_DEFAULT_TRANSLATIONS,
    ...translations
  };
  useEffect(() => {
    if (filesFromProps) {
      setFilesToUpload(filesFromProps);
    }
  }, [filesFromProps]);
  const onDragEnter = () => setIsDragging(true);
  const onDragLeave = () => setIsDragging(false);
  const onDragOver = () => setIsDragging(true);
  const removeItem = useCallback(index => {
    const newItems = [...filesToUpload];
    newItems.splice(index, 1);
    if (onChange) {
      onChange(newItems);
    }
    setFilesToUpload(newItems);
  }, [filesToUpload, setFilesToUpload, onChange]);
  const onDrop = useCallback(event => {
    event.preventDefault();
    setIsDragging(false);
    const {
      files
    } = event.dataTransfer || event.target;
    const validatedFiles = [];
    for (let i = 0; i < files.length; i += 1) {
      const file = files.item(i);
      if (!file) {
        return;
      }
      if (validate && !validateContentType(validate.mimeTypes, file.type)) {
        setError(translate(t.unsupportedType, {
          fileName: file.name,
          fileType: file.type
        }));
        return;
      }
      if (validate && !validateSize(validate.maxSize, file && file.size)) {
        setError(translate(t.unsupportedSize, {
          fileName: file.name
        }));
        return;
      }
      validatedFiles.push(file);
      setError(null);
    }
    let newFiles;
    if (!multiple && validatedFiles.length) {
      newFiles = [validatedFiles[0]];
    } else {
      newFiles = [...filesToUpload, ...validatedFiles];
    }
    if (onChange) {
      onChange(newFiles);
    }
    setFilesToUpload(newFiles);
  }, [onChange, setFilesToUpload, setIsDragging]);
  const displayUploadLimit = useCallback(() => {
    if (validate && validate.maxSize) {
      return inUnit(validate.maxSize, uploadLimitIn);
    }
    return '';
  }, [validate]);
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(StyledDropZone, _extends({
    onDragEnter: onDragEnter,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    isDragging: isDragging
  }, other, {
    p: "xl"
  }), /*#__PURE__*/React.createElement(UploadInput, {
    type: "file",
    onChange: event => onDrop(event),
    multiple: multiple
  }), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    color: "primary100"
  }, /*#__PURE__*/React.createElement(Image, null)), /*#__PURE__*/React.createElement(Text, {
    fontSize: "sm"
  }, t.placeholder), /*#__PURE__*/React.createElement(Box, null, validate && validate.maxSize ? /*#__PURE__*/React.createElement(Text, {
    variant: "xs",
    color: "grey60",
    lineHeight: "default",
    mt: "sm"
  }, translate(t.acceptedSize, {
    maxSize: displayUploadLimit()
  })) : '', validate && validate.mimeTypes && validate.mimeTypes.length ? /*#__PURE__*/React.createElement(Text, {
    variant: "xs",
    color: "grey60",
    lineHeight: "default",
    mt: "sm"
  }, translate(t.acceptedType, {
    mimeTypes: validate.mimeTypes.join(', ')
  })) : ''))), error && /*#__PURE__*/React.createElement(MessageBox, {
    mt: "default",
    variant: "danger",
    size: "sm",
    icon: "AlertCircle",
    message: error,
    onCloseClick: () => setError(null)
  }), filesToUpload.map((file, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  React.createElement(DropZoneItem, {
    file: file,
    key: index,
    onRemove: () => removeItem(index)
  })));
};
DropZone.displayName = 'DropZone';
export { DropZone };
export default DropZone;