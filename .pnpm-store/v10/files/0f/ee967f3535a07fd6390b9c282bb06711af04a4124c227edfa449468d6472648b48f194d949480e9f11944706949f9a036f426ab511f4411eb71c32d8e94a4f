import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { Box } from "../../atoms/box/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { Button } from "../../atoms/button/index.js";
import { Text } from "../../atoms/text/index.js";
import { humanFileSize } from "../../utils/index.js";
const DropZoneImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${({
  src
}) => src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: ${({
  theme
}) => theme.space.sm};
`;
const Wrapper = styled.div`
  padding: ${({
  theme
}) => theme.space.md};
  display: flex;
  align-items: center;
  margin-top: ${({
  theme
}) => theme.space.lg};
  gap: ${({
  theme
}) => theme.space.lg};

  border: ${({
  theme
}) => theme.borders.default};
  border-color: ${({
  theme
}) => theme.colors.grey40};
  border-radius: ${({
  theme
}) => theme.space.sm};
`;

/**
 * @memberof DropZoneItem
 * @alias DropZoneItemProps
 */

/**
 * @classdesc
 *
 * <img src="components/drop-zone-item.png" />
 *
 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
 * reused anywhere
 *
 * ### Usage
 *
 * ```javascript
 * import { DropZoneItem, DropZoneItemProps } from '@adminjs/design-system'
 * ```
 *
 * @see DropZoneItem
 * @hideconstructor
 * @see DropZoneItemProps
 * @example
 * return (
 *  <DropZoneItem
 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
 *    filename="shut-up-it-works.png"
 *  />
 * )
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropZoneItem = props => {
  const {
    file,
    onRemove,
    filename
  } = props;
  let {
    src
  } = props;
  if (file && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
    src = URL.createObjectURL(file);
  }
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40
  }, src ? /*#__PURE__*/React.createElement(DropZoneImg, {
    src: src
  }) : /*#__PURE__*/React.createElement(Icon, {
    icon: "Paperclip"
  })), /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "column",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "sm",
    fontWeight: 500,
    lineHeight: "default"
  }, file?.name || filename), file && /*#__PURE__*/React.createElement(Text, {
    variant: "sm",
    color: "grey80",
    lineHeight: "default"
  }, new Date(file.lastModified).toLocaleString(), " ", humanFileSize(file.size, 'MB'))), onRemove && /*#__PURE__*/React.createElement(Button, {
    ml: "auto",
    mr: "md",
    variant: "light",
    size: "icon",
    type: "button",
    rounded: true,
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "X"
  })));
};
DropZoneItem.displayName = 'DropZoneItem';
export { DropZoneItem };
export default DropZoneItem;