function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useMemo } from 'react';
import { styled } from "../../../build/utils/styled.js";
import ReactDatePicker from 'react-datepicker';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js';
import styles from "../../utils/datepicker.styles.js";
import { Icon } from "../../atoms/icon/index.js";
import { Box } from "../../atoms/box/index.js";
import { cssClass } from "../../utils/css-class.js";
const Mask = MaskedInput.default ?? MaskedInput;
const autocorrectedDatePipe = createAutoCorrectedDatePipe.default ?? createAutoCorrectedDatePipe;
const DatePickerIcon = styled(Icon)`
  position: absolute;  
  color: ${({
  theme
}) => theme.colors.primary100};
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  min-width: 34px;
  width: auto;
`;
const StyledDatePicker = styled(Box)`
  ${styles};
  position: relative;

  & .react-datepicker-wrapper {
    width: 100%;
    box-sizing: border-box;
    border: ${({
  theme
}) => `1px solid ${theme.colors.grey40}`};
    padding: 4px 8px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 2px;
  }

  & .react-datepicker-wrapper input {
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
    color: ${({
  theme
}) => theme.colors.grey100};

    &:focus-visible {
      outline: none;
    }
  }

  & .react-datepicker {
    border-radius: 0;
    padding: ${({
  theme
}) => theme.space.default};
    font-family: ${({
  theme
}) => theme.font};
    z-index: 101;

    &:focus-visible {
      outline: none;
    }
  }

  & .react-datepicker__navigation--next {
    border-left-color: ${({
  theme
}) => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${({
  theme
}) => theme.colors.primary100};
  }

  & .react-datepicker__navigation--previous {
    border-right-color: ${({
  theme
}) => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${({
  theme
}) => theme.colors.primary100};
  }

  & .react-datepicker__navigation {
    outline: none;
  }

  & .react-datepicker__year-read-view--down-arrow {
    top: 5px;
  }

  & .react-datepicker__header {
    background: ${({
  theme
}) => theme.colors.white};
    font-size: ${({
  theme
}) => theme.fontSizes.default};
    border: none;
  }

  & .react-datepicker__current-month {
    font-weight: normal;
    padding-bottom: ${({
  theme
}) => theme.space.lg};
  }

  & .react-datepicker__month {
    margin-top: 0;
  }

  & .react-datepicker__day-name {
    color: ${({
  theme
}) => theme.colors.primary60};
  }

  & .react-datepicker__day--outside-month {
    color: ${({
  theme
}) => theme.colors.grey40};
  }

  & .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    color: ${({
  theme
}) => theme.colors.white};
  }

  & .react-datepicker__day--selected {
    color: ${({
  theme
}) => theme.colors.white};
  }

  & .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today) {
    background: none;
    color: ${({
  theme
}) => theme.colors.grey100};
  }

  & .react-datepicker__day:hover,
  & .react-datepicker__day {
    border-radius: 15px;
  }

  & .react-datepicker__day--selected {
    background: ${({
  theme
}) => theme.colors.primary100};
    border-radius: 15px;
    color: ${({
  theme
}) => theme.colors.white};
  }
`;
const parseDateSafely = newDate => {
  const timestamp = Date.parse(newDate);
  if (!Number.isNaN(timestamp)) {
    return new Date(timestamp);
  }
  return null;
};

// https://github.com/text-mask/text-mask/issues/951
const convertDateFnsFormatToDatePipeFormat = format => {
  const tokens = format.split('');
  return tokens.map(char => {
    if (char === 'M') return 'm';
    if (char === 'm') return 'M';
    return char;
  }).join('');
};
const defaultDateProps = {
  date: {
    format: 'yyyy/MM/dd',
    placeholder: 'YYYY/MM/DD',
    inputMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]
  },
  datetime: {
    format: 'yyyy/MM/dd HH:mm',
    placeholder: 'YYYY/MM/DD HH:mm',
    inputMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/]
  }
};

/**
 * Props for DatePicker
 *
 * @memberof DatePicker
 * @alias DatePickerProps
 * @property {any} {...}    Any custom props to pass down to the ReactDatePicker
 * @see https://reactdatepicker.com/
 */

const parseCustomMask = mask => mask.map(el => {
  if (typeof el === 'string') return el;
  if (el.raw) return el.raw;
  if (!el.regex) throw new Error('Invalid input mask');
  return new RegExp(el.regex);
});
const getDateInputProps = (
// eslint-disable-next-line default-param-last
propertyType = 'datetime', props) => {
  const {
    dateFormat,
    placeholderText,
    inputMask
  } = props;
  const defaultProps = defaultDateProps[propertyType];
  const format = dateFormat ?? defaultProps.format;
  const placeholder = placeholderText ?? defaultProps.placeholder;
  const mask = inputMask?.mask ? parseCustomMask(inputMask.mask) : defaultProps.inputMask;
  // eslint-disable-next-line max-len
  const dateFormatPipe = autocorrectedDatePipe(convertDateFnsFormatToDatePipeFormat(format));
  return {
    format,
    dateFormatPipe,
    placeholder,
    parsedMask: mask
  };
};

/**
 * @classdesc
 *
 * <img src="components/date-picker.png" />
 *
 *
 * Component responsible for showing dates. It is a wrapper to
 * [react datepicker]{@link https://reactdatepicker.com/}.
 *
 * ### Usage
 *
 * ```javascript
 * import { DatePicker, DatePickerProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @see https://reactdatepicker.com/
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-datepicker--default Storybook}
 * @see DatePickerProps
 * @hideconstructor
 *
 * @example
 * return (
 * <Box width={1/2} height="300px">
 *   <DatePicker onChange={(date) => console.log(date)}/>
 * </Box>
 * )
 * @section design-system
 */
const DatePicker = props => {
  const {
    value,
    onChange,
    disabled,
    propertyType,
    inputMask = {},
    placeholderText,
    dateFormat,
    ...other
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    mask: _mask,
    ...otherInputMaskProps
  } = inputMask;
  const handleChange = newDate => {
    onChange(parseDateSafely(newDate)?.toISOString?.() || '');
  };
  const dateValue = useMemo(() => parseDateSafely(value), [value]);
  const {
    dateFormatPipe,
    format,
    parsedMask,
    placeholder
  } = getDateInputProps(propertyType, {
    dateFormat,
    inputMask,
    placeholderText
  });
  return /*#__PURE__*/React.createElement(StyledDatePicker, {
    className: cssClass('DatePicker')
  }, /*#__PURE__*/React.createElement(ReactDatePicker, _extends({
    customInput: /*#__PURE__*/React.createElement(Mask, _extends({
      pipe: dateFormatPipe,
      mask: parsedMask,
      keepCharPositions: true,
      guide: true,
      placeholder: placeholder,
      disabled: disabled
    }, otherInputMaskProps)),
    selected: dateValue,
    onChange: handleChange,
    showTimeInput: propertyType === 'datetime',
    dateFormat: format,
    disabled: disabled
  }, other)), /*#__PURE__*/React.createElement(DatePickerIcon, {
    icon: "Calendar",
    color: "primary100"
  }));
};
DatePicker.displayName = 'DatePicker';
export { DatePicker };
export default DatePicker;