import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { ModalInline } from "./modal-inline.js";
import { ModalStyled } from "./modal-styled.js";
import { Box } from "../../atoms/box/index.js";
import { Overlay } from "../../atoms/overlay/index.js";
const Wrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${ModalStyled} {
    z-index: 1001;
  }
`;
export const ModalWrapper = props => {
  const {
    onOverlayClick,
    ...otherProps
  } = props;
  const handleOverlayClick = onOverlayClick || (() => true);
  return /*#__PURE__*/React.createElement(Wrapper, {
    flex: true,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Overlay, {
    onClick: handleOverlayClick
  }), /*#__PURE__*/React.createElement(ModalInline, otherProps));
};
ModalWrapper.displayName = 'ModalWrapper';
export default ModalWrapper;