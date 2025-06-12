import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Placeholder, TableRow, TableCell, CheckBox, ButtonGroup } from '@adminjs/design-system';
import BasePropertyComponent from '../../property-type/index.js';
import { buildActionClickHandler } from '../../../interfaces/index.js';
import { display } from './utils/display.js';
import mergeRecordResponse from '../../../hooks/use-record/merge-record-response.js';
import { useActionResponseHandler, useTranslation, useModal } from '../../../hooks/index.js';
import { actionsToButtonGroup } from '../action-header/actions-to-button-group.js';
import allowOverride from '../../../hoc/allow-override.js';
import { getResourceElementCss } from '../../../utils/index.js';
const RecordInList = props => {
  const {
    resource,
    record: recordFromProps,
    actionPerformed,
    isLoading,
    onSelect,
    isSelected
  } = props;
  const [record, setRecord] = useState(recordFromProps);
  const navigate = useNavigate();
  const location = useLocation();
  const translateFunctions = useTranslation();
  const modalFunctions = useModal();
  const handleActionCallback = useCallback(actionResponse => {
    if (actionResponse.record && !actionResponse.redirectUrl) {
      setRecord(mergeRecordResponse(record, actionResponse));
    } else if (actionPerformed) {
      actionPerformed(actionResponse);
    }
  }, [actionPerformed, record]);
  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
  useEffect(() => {
    setRecord(recordFromProps);
  }, [recordFromProps]);
  const {
    recordActions
  } = record;
  const show = record.recordActions.find(({
    name
  }) => name === 'show');
  const edit = record.recordActions.find(({
    name
  }) => name === 'edit');
  const action = show || edit;
  const handleClick = event => {
    const targetTagName = event.target.tagName.toLowerCase();
    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
      buildActionClickHandler({
        action,
        params: {
          resourceId: resource.id,
          recordId: record.id
        },
        actionResponseHandler,
        navigate,
        location,
        translateFunctions,
        modalFunctions
      })(event);
    }
  };
  const actionParams = {
    resourceId: resource.id,
    recordId: record.id
  };
  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
    action: sourceAction,
    params: actionParams,
    actionResponseHandler,
    navigate,
    location,
    translateFunctions,
    modalFunctions
  })(event);
  const buttons = [{
    icon: 'MoreHorizontal',
    variant: 'light',
    label: undefined,
    'data-testid': 'actions-dropdown',
    buttons: actionsToButtonGroup({
      actions: recordActions,
      params: actionParams,
      handleClick: handleActionClick,
      translateFunctions,
      modalFunctions
    })
  }];
  const contentTag = getResourceElementCss(resource.id, 'table-row');
  return /*#__PURE__*/React.createElement(TableRow, {
    className: isSelected ? 'selected' : 'not-selected',
    onClick: handleClick,
    "data-id": record.id,
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(TableCell, {
    width: 0
  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React.createElement(CheckBox, {
    onChange: () => onSelect(record),
    checked: isSelected
  }) : null), resource.listProperties.map(property => {
    const cellTag = `${resource.id}-${property.name}-table-cell`;
    return /*#__PURE__*/React.createElement(TableCell, {
      style: {
        cursor: 'pointer'
      },
      key: property.propertyPath,
      "data-property-name": property.propertyPath,
      display: display(property.isTitle),
      "data-css": cellTag
    }, isLoading ? /*#__PURE__*/React.createElement(Placeholder, {
      style: {
        height: 14
      }
    }) : /*#__PURE__*/React.createElement(BasePropertyComponent, {
      key: property.propertyPath,
      where: "list",
      property: property,
      resource: resource,
      record: record
    }));
  }), /*#__PURE__*/React.createElement(TableCell, {
    key: "options",
    className: "options"
  }, recordActions.length ? /*#__PURE__*/React.createElement(ButtonGroup, {
    buttons: buttons
  }) : null));
};
const OverridableRecordInList = allowOverride(RecordInList, 'RecordInList');
export { OverridableRecordInList as default, OverridableRecordInList as RecordInList, RecordInList as OriginalRecordInList };