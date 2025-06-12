/* eslint-disable max-len */
import React, { useState, useRef, forwardRef } from 'react';
import PortalUtils from "../../utils/portal-utils.js";
import { TooltipControl } from "./tooltip-control.js";
const TooltipPortal = PortalUtils.createPortalForKey('TOOLTIP', TooltipControl);

/**
 * @load ./tooltip.doc.md
 * @component
 * @subcategory Atoms
 * @hideconstructor
 * @new In version 3.3
 * @section design-system
 */
export const Tooltip = props => {
  const {
    direction,
    title,
    children,
    size
  } = props;
  const childRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let TriggerElement;
  let ContentElement;
  const childrenCount = React.Children.count(children);
  if (childrenCount === 1) {
    TriggerElement = children;
  } else if (childrenCount === 2) {
    React.Children.forEach(children, child => {
      const type = child.type?.displayName;
      if (type === 'TooltipContent') {
        ContentElement = child;
      } else {
        TriggerElement = child;
      }
    });
  }
  const onEnter = () => {
    setIsVisible(true);
  };
  const onLeave = () => {
    setIsVisible(false);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const ChildWithRef = /*#__PURE__*/forwardRef((triggerProps, ref) => /*#__PURE__*/React.cloneElement(TriggerElement, {
    ...triggerProps,
    displayName: 'TooltipTrigger',
    ref
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChildWithRef, {
    ref: childRef,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }), isVisible && /*#__PURE__*/React.createElement(TooltipPortal, {
    title: title,
    childRef: childRef,
    size: size,
    direction: direction,
    ContentElement: ContentElement
  }));
};
Tooltip.displayName = 'Tooltip';
export default Tooltip;