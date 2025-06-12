import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Button, CheckBox, Icon, Link, Text } from "../index.js";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from "./index.js";
export const Default = {
  render: ({
    onClick
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    const header = ['Name', 'Surname', 'Gender', 'Age'];
    const data = [['John', 'Doe', 'Male', '57'], ['Joanna', 'K', 'Female', '32'], ['Patrick', 'Jogs', 'Male', '35'], ['Elisabeth', 'Briggs', 'Female', '28'], ['Jda', 'Karo', 'Female', '22']];
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: ""
    }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableCaption, null, /*#__PURE__*/React.createElement(Text, {
      as: "span"
    }, "Selected items "), /*#__PURE__*/React.createElement(Button, {
      onClick: handleClick
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "Trash"
    }), "Remove")), /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(CheckBox, null)), header.map((head, i) => /*#__PURE__*/React.createElement(TableCell, {
      key: head,
      onClick: handleClick
    }, /*#__PURE__*/React.createElement(Link, {
      href: "/"
    }, head, i === 0 && /*#__PURE__*/React.createElement(Icon, {
      icon: "ChevronUp"
    })))))), /*#__PURE__*/React.createElement(TableBody, null, data.map(row => /*#__PURE__*/React.createElement(TableRow, {
      key: row[0]
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(CheckBox, null)), row.map(item => /*#__PURE__*/React.createElement(TableCell, {
      key: item
    }, item)))))));
  }
};
const meta = {
  title: 'DesignSystem/Atoms/Table',
  component: Table,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
};
export default meta;