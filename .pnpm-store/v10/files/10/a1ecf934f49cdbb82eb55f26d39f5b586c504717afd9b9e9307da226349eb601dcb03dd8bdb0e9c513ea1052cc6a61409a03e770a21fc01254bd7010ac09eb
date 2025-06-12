import React, { useState } from 'react';
import { Box } from "../../index.js";
import { DatePicker } from "./index.js";
const propertyTypes = {
  Date: 'date',
  DateTime: 'datetime'
};
export const Default = {
  render: props => {
    const [date, setDate] = useState('2020-12-01T14:32:00.000Z');
    const {
      disabled,
      propertyType
    } = props;
    const handleChange = value => {
      if (value) setDate(value);else setDate(null);
    };
    return /*#__PURE__*/React.createElement(Box, {
      height: "320px"
    }, /*#__PURE__*/React.createElement(DatePicker, {
      onChange: handleChange,
      value: date ?? '',
      disabled: disabled,
      propertyType: propertyType
    }));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/DatePicker',
  component: DatePicker,
  args: {
    disabled: false,
    propertyType: propertyTypes.Date
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    propertyType: {
      options: propertyTypes,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;