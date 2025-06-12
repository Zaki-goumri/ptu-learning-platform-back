import React, { useState } from 'react';
import { Box, Button, Drawer, DrawerContent, DropZone, Header, Icon, Input, Label, RichTextEditor } from "../index.js";
export const Default = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return /*#__PURE__*/React.createElement(Box, {
    variant: "grey",
    width: 1
  }, isDrawerVisible && /*#__PURE__*/React.createElement(Drawer, null, /*#__PURE__*/React.createElement(DrawerContent, null, /*#__PURE__*/React.createElement(Header.H3, null, /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    rounded: true,
    mr: "lg",
    onClick: () => setIsDrawerVisible(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight"
  })), "Article settings"), /*#__PURE__*/React.createElement(Label, null, "Drop splash screen"), /*#__PURE__*/React.createElement(DropZone, null))), /*#__PURE__*/React.createElement(Box, {
    variant: "white"
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "row-reverse",
    mb: "xl"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    onClick: () => setIsDrawerVisible(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Settings"
  })), /*#__PURE__*/React.createElement(Button, {
    mr: "default",
    variant: "primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Send"
  }), "Publish"), /*#__PURE__*/React.createElement(Button, {
    mr: "default"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Save"
  }), "Save")), /*#__PURE__*/React.createElement(Box, {
    mb: "xxl"
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "xxl",
    borderless: true,
    width: 1,
    placeholder: "My amazing new article"
  })), /*#__PURE__*/React.createElement(RichTextEditor, {
    value: "",
    onChange: () => {
      /* noop */
    }
  })));
};
const meta = {
  title: 'DesignSystem/Templates/Blog'
};
export default meta;