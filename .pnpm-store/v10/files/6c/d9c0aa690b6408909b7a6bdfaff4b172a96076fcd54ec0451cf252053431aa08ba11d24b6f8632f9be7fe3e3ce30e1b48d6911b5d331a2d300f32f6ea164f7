function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import { Section, FormGroup, FormMessage, Button, Input, Box, Icon } from '@adminjs/design-system';
import { PropertyLabel } from '../utils/property-label/index.js';
import { flat } from '../../../../utils/flat/index.js';
import { useTranslation } from '../../../hooks/use-translation.js';
const EditKeyValuePair = props => {
  const {
    onKeyChange,
    onValueChange,
    onRemoveItem,
    property,
    objectValue,
    objectKey,
    error
  } = props;
  const {
    tm
  } = useTranslation();
  const [currentValue, setValue] = useState(objectValue ?? '');
  const [currentKey, setKey] = useState(objectKey ?? '');
  return /*#__PURE__*/React.createElement(Box, {
    flex: true,
    mb: "lg"
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error),
    mr: "lg",
    mb: "0px"
  }, /*#__PURE__*/React.createElement(Input, _extends({
    placeholder: tm('keyPlaceholder'),
    onChange: e => setKey(e.target.value),
    onBlur: () => onKeyChange(objectKey, currentKey),
    onKeyDown: e => e.keyCode === 13 && onKeyChange(objectKey, currentKey),
    value: currentKey
  }, property.props?.keyInputProps ?? {})), error && /*#__PURE__*/React.createElement(FormMessage, null, tm(error.message, property.resourceId))), /*#__PURE__*/React.createElement(FormGroup, {
    mb: "0px"
  }, /*#__PURE__*/React.createElement(Input, _extends({
    placeholder: tm('valuePlaceholder'),
    onChange: e => setValue(e.target.value),
    onBlur: () => onValueChange(currentKey, currentValue),
    onKeyDown: e => e.keyCode === 13 && onValueChange(currentKey, currentValue),
    value: currentValue,
    disabled: !objectKey
  }, property.props?.valueInputProps ?? {})))), /*#__PURE__*/React.createElement(Button, {
    rounded: true,
    ml: "sm",
    "data-testid": "delete-item",
    type: "button",
    size: "icon",
    onClick: () => onRemoveItem(currentKey),
    variant: "contained",
    color: "danger",
    flexGrow: 0,
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Trash2"
  })));
};
const Edit = props => {
  const {
    property,
    record,
    onChange,
    resource
  } = props;
  const {
    tm,
    tb
  } = useTranslation();
  const [objectValue, setObjectValue] = useState(flat.get(record.params, property.path) ?? {});
  const handleKeyChange = (oldKey, newKey) => {
    if (oldKey === newKey) return;
    const tmpValue = objectValue[oldKey];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      [oldKey]: _removedKey,
      ...objectCopy
    } = objectValue;
    objectCopy[newKey] = tmpValue ?? '';
    setObjectValue(parseObjectValue(objectCopy));
  };
  const handleValueChange = (key, value) => {
    objectValue[key] = value;
    setObjectValue(parseObjectValue({
      ...objectValue
    }));
  };
  const parseObjectValue = obj => Object.entries(obj).reduce((memo, [k, v]) => {
    if (!k || !k.length) return memo;
    memo[k] = v;
    return memo;
  }, {});

  /**
   * This is used to prevent empty/duplicate keys from being added to JSON
   */
  const getNextKey = previousId => {
    const nextId = previousId ? previousId + 1 : Object.keys(objectValue ?? {}).length + 1;
    const nextKey = `${tm('initialKey', resource.id, {
      number: nextId
    })}`;
    if (objectValue[nextKey] !== undefined) {
      return getNextKey(nextId);
    }
    return nextKey;
  };
  const addNewKeyValuePair = event => {
    event.preventDefault();
    const key = getNextKey();
    objectValue[key] = '';
    setObjectValue(parseObjectValue({
      ...objectValue
    }));
  };
  const handleRemoveItem = key => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      [key]: _removedKey,
      ...objectCopy
    } = objectValue;
    setObjectValue(parseObjectValue(objectCopy));
  };
  useEffect(() => {
    onChange(property.path, objectValue);
  }, [objectValue]);
  const error = record.errors && record.errors[property.path];
  if (property.description === undefined) {
    property.description = tm('keyValuePropertyDefaultDescription', resource.id);
  }
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(Section, property.props, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/React.createElement(EditKeyValuePair, {
    key: key,
    property: property,
    objectValue: value,
    objectKey: key,
    onKeyChange: handleKeyChange,
    onValueChange: handleValueChange,
    onRemoveItem: handleRemoveItem,
    error: record.errors[`${property.path}${flat.DELIMITER}${key}`]
  })), /*#__PURE__*/React.createElement(Button, {
    mt: "lg",
    onClick: addNewKeyValuePair
  }, tb('addNewItem', resource.id))), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default Edit;