import { useState } from 'react';
import parseISO from 'date-fns/parseISO/index.js';
import { formatDateProperty } from "../../utils/index.js";
export const useDatePicker = ({
  value,
  propertyType,
  disabled,
  onChange
}) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  let date;
  let dateString;
  if (value && value.constructor.name !== 'Date') {
    const dateStringValue = value;
    let dateNum = parseISO(dateStringValue);
    if (dateNum.toString() === 'Invalid Date') dateNum = undefined;
    if (dateNum) {
      date = new Date(dateNum);
      dateString = formatDateProperty(date, propertyType);
    }
  } else if (value && value.constructor.name === 'Date') {
    dateString = formatDateProperty(value, propertyType);
  }
  const onDateChange = newDate => {
    if (!disabled) {
      onChange(newDate);
    }
  };
  return {
    dateString,
    date,
    isCalendarVisible,
    setCalendarVisible,
    onDateChange
  };
};
export default useDatePicker;