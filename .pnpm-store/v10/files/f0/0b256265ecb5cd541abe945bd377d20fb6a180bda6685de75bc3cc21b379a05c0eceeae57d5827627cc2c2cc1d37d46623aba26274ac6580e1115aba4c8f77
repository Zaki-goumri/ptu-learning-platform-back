function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback } from 'react';
import { Button, Section, FormGroup, FormMessage, Icon, Box } from '@adminjs/design-system';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import AddNewItemButton from './add-new-item-translation.js';
import { flat } from '../../../../utils/index.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import { convertToSubProperty } from './convert-to-sub-property.js';
import { removeSubProperty } from './remove-sub-property.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const ItemRenderer = props => {
  const {
    ItemComponent,
    property,
    onDelete,
    index,
    record,
    isDraggable
  } = props;
  const uniqueDraggableId = window.btoa(unescape(encodeURIComponent(`${JSON.stringify(flat.get(record.params, property.path))}-${property.path}`)));
  return /*#__PURE__*/React.createElement(Draggable, {
    draggableId: uniqueDraggableId,
    index: index,
    key: uniqueDraggableId,
    isDragDisabled: !isDraggable
  }, provided => /*#__PURE__*/React.createElement(Box, _extends({
    as: "div",
    ref: provided.innerRef
  }, provided.draggableProps, provided.dragHandleProps, {
    backgroundColor: "white",
    flex: true,
    flexDirection: "row",
    alignItems: "start",
    variant: "transparent",
    "data-testid": property.path
  }), /*#__PURE__*/React.createElement(Box, {
    as: "div",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(ItemComponent, props)), /*#__PURE__*/React.createElement(Button, {
    rounded: true,
    mt: "xl",
    ml: "default",
    "data-testid": "delete-item",
    type: "button",
    size: "icon",
    onClick: event => onDelete(event, property),
    variant: "text",
    color: "danger"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Trash2"
  }))));
};
const InputsInSection = props => {
  const {
    property,
    record,
    resource,
    onChange
  } = props;
  const items = flat.get(record.params, property.path) || [];
  const addNew = useCallback(event => {
    const newItems = [...items, property.subProperties.length ? {} : ''];
    onChange(property.path, newItems);
    event.preventDefault();
    return false;
  }, [record, onChange, property]);
  const removeItem = useCallback((event, subProperty) => {
    const newRecord = removeSubProperty(record, subProperty.path);
    onChange(newRecord);
    event.preventDefault();
    return false;
  }, [record, onChange, property]);
  const handleOnDragEnd = useCallback(result => {
    const {
      source,
      destination
    } = result;
    if (!source || !destination || destination.index === source.index) return;
    const itemsCopy = Array.from(items);
    const [sourceItem] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, sourceItem);
    onChange(property.path, itemsCopy);
  }, [record, onChange, property]);
  return /*#__PURE__*/React.createElement(DragDropContext, {
    onDragEnd: handleOnDragEnd
  }, /*#__PURE__*/React.createElement(Droppable, {
    droppableId: property.path
  }, provided => /*#__PURE__*/React.createElement(Section, _extends({
    ref: provided.innerRef
  }, provided.droppableProps, {
    mt: "xl",
    className: property.path
  }), items.map((item, i) => {
    const itemProperty = convertToSubProperty(property, i);
    return /*#__PURE__*/React.createElement(ItemRenderer, _extends({}, props, {
      property: itemProperty,
      isDraggable: property.isDraggable,
      key: itemProperty.path,
      onDelete: removeItem,
      index: i
    }));
  }), provided.placeholder, /*#__PURE__*/React.createElement(AddNewItemButton, {
    resource: resource,
    property: property,
    onClick: addNew,
    "data-testid": `${property.path}-add`
  }))));
};
const Edit = props => {
  const {
    property,
    record,
    testId
  } = props;
  const {
    tm
  } = useTranslation();
  const error = record.errors && record.errors[property.propertyPath];
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error,
    "data-testid": testId
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(InputsInSection, props), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
const OverridableEdit = allowOverride(Edit, 'DefaultArrayEditProperty');
export { OverridableEdit as default, OverridableEdit as Edit };