function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable default-case */
import React, { useLayoutEffect, useRef, useState } from 'react';
import { styled } from "../../../build/utils/styled.js";
const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`;
export const DEFAULT_STICK = 'left';

/**
 * Available values for {@link DropDown}.stick prop
 * @memberof DropDown
 */

/**
 * Props passed to DropDown element.
 * @property {string} [...] Other props from {@link BoxProps}
 * @memberof DropDown
 * @extends BoxProps
 */

/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropDown = props => {
  const {
    children,
    stick = DEFAULT_STICK,
    ...boxProps
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [initialHeight, setInitialHeight] = useState(null);
  const ref = useRef(null);
  const [menuPosition, setMenuPosition] = useState();
  useLayoutEffect(() => {
    if (ref.current && !initialHeight) {
      const {
        offsetHeight
      } = ref.current;
      setInitialHeight(offsetHeight);
      switch (stick) {
        case 'left':
          setMenuPosition({
            left: 0,
            top: offsetHeight
          });
          break;
        case 'right':
          setMenuPosition({
            right: 0,
            top: offsetHeight
          });
      }
    }
  }, [ref.current]);
  const elements = React.Children.map(children, child => {
    const type = child && child.type && child.type.displayName;
    if (type === 'DropDownTrigger') {
      // getting rid of DropDownTrigger and render just what was inside
      return /*#__PURE__*/React.cloneElement(child.props.children);
    }
    if (type === 'DropDownMenu') {
      return /*#__PURE__*/React.cloneElement(child, {
        isVisible,
        stick,
        ...menuPosition
      });
    }
    return child;
  });
  return /*#__PURE__*/React.createElement(StyledDropDown, _extends({}, boxProps, {
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    ref: ref
  }), elements);
};
DropDown.displayName = 'DropDown';
export { DropDown };
export default DropDown;