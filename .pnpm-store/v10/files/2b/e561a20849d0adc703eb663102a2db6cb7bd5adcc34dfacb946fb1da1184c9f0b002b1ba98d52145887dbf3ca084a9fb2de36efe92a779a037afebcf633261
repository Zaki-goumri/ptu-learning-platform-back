import filter from 'lodash/filter.js';
import React, { useState } from 'react';
import { Box, FormGroup } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { Select, SelectAsync } from "./index.js";
const options = [{
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];
export const Default = props => {
  const {
    isMulti
  } = props;
  const [value, setValue] = useState();
  return /*#__PURE__*/React.createElement(Box, {
    width: 1
  }, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Select example"
  }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Select, {
    value: value,
    onChange: selected => setValue(selected),
    options: options,
    isMulti: isMulti
  }))));
};
export const Async = () => {
  const [valueAsync, setValueAsync] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const loadOptions = async inputValue => {
    setIsLoading(true);
    const found = filter(options, ({
      value
    }) => value.includes(inputValue));
    setIsLoading(false);
    return Promise.resolve(found);
  };
  return /*#__PURE__*/React.createElement(Box, {
    width: 1
  }, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Select async example"
  }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(SelectAsync, {
    value: valueAsync,
    onChange: selected => setValueAsync(selected),
    loadOptions: loadOptions,
    isLoading: isLoading
  }))));
};
const meta = {
  title: 'DesignSystem/Molecules/Select',
  component: Select,
  parameters: {
    controls: {
      include: ['variant', 'isMulti']
    }
  },
  args: {
    variant: 'default',
    isMulti: false
  },
  argTypes: {
    variant: {
      options: ['default', 'filter'],
      control: {
        type: 'select'
      }
    },
    isMulti: {
      control: {
        type: 'boolean'
      }
    }
  }
};
export default meta;