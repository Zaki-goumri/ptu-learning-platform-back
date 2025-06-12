function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useMemo } from 'react';
import { Icon } from "../../atoms/icon/index.js";
import { DropDownMenu, DropDownItem } from "../../molecules/drop-down/index.js";
import { StyledDropDownItemAction } from "./button-group.styled.js";
export const DropDownItemWithButtons = props => {
  const {
    variant,
    onClick,
    href,
    icon,
    label,
    buttons,
    source,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const onClickHandler = onClick ? async event => {
    setLoading(true);
    await onClick(event, source);
    setLoading(false);
  } : undefined;
  const iconName = useMemo(() => loading ? 'Loader' : icon, [loading]);
  return /*#__PURE__*/React.createElement(DropDownItem, {
    colorVariant: variant,
    p: 0
  }, /*#__PURE__*/React.createElement(StyledDropDownItemAction, _extends({
    onClick: onClickHandler,
    href: href,
    as: "a",
    hasLabel: !!label
  }, rest), buttons && buttons.length ? /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    ml: "-24px",
    mr: "0"
  }) : '', !loading && !icon ? '' : /*#__PURE__*/React.createElement(Icon, {
    key: iconName?.toString(),
    icon: iconName,
    spin: loading
  }), label), buttons && buttons.length ? /*#__PURE__*/React.createElement(DropDownMenu, null, buttons.map(button => /*#__PURE__*/React.createElement(DropDownItemWithButtons, _extends({}, button, {
    key: button.label
  })))) : '');
};
DropDownItemWithButtons.displayName = 'DropDownItemWithButtons';
export default DropDownItemWithButtons;