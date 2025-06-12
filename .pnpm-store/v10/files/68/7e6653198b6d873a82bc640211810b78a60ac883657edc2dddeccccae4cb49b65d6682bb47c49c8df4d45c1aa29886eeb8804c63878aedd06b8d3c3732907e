import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from "../../hooks/use-window-size.js";
import { StyledTooltip } from "./tooltip-styled.js";
/**
 * @component
 * @private
 * @memberof Tooltip
 */
export const TooltipControl = props => {
  const {
    title,
    childRef,
    direction = 'bottom',
    ContentElement,
    size
  } = props;
  const tooltipRef = useRef(null);
  const [dimension, setDimension] = useState(null);
  const [position, setPosition] = useState(null);
  const [elementPosition, setElementPosition] = useState(null);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (childRef.current) {
      const {
        width: clientWidth,
        top: offsetTop,
        left: offsetLeft,
        height: clientHeight
      } = childRef.current.getBoundingClientRect();
      setElementPosition({
        width: clientWidth,
        top: offsetTop,
        left: offsetLeft,
        height: clientHeight
      });
    }
  }, [childRef, windowSize?.width, windowSize?.height]);
  useEffect(() => {
    if (tooltipRef.current) {
      const {
        clientWidth,
        clientHeight
      } = tooltipRef.current;
      setDimension({
        width: clientWidth,
        height: clientHeight
      });
    }
  }, [tooltipRef?.current?.clientWidth, tooltipRef?.current?.clientHeight, title]);
  useEffect(() => {
    if (!elementPosition || !dimension) {
      return;
    }

    // eslint-disable-next-line default-case
    switch (direction) {
      case 'bottom':
        {
          setPosition({
            top: elementPosition.top + elementPosition.height,
            left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2
          });
          break;
        }
      case 'top':
        {
          setPosition({
            top: elementPosition.top - dimension.height,
            left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2
          });
          break;
        }
      case 'left':
        {
          setPosition({
            top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
            left: elementPosition.left - dimension.width
          });
          break;
        }
      case 'right':
        {
          setPosition({
            top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
            left: elementPosition.left + elementPosition.width
          });
          break;
        }
    }
  }, [elementPosition, dimension, direction]);
  const isVisible = !!(dimension && position);
  return /*#__PURE__*/React.createElement(StyledTooltip, {
    ref: tooltipRef,
    left: position?.left || '-1110px',
    top: position?.top || '-1110px',
    size: size,
    direction: direction,
    isVisible: isVisible
  }, ContentElement || title);
};
TooltipControl.displayName = 'TooltipControl';
export default TooltipControl;