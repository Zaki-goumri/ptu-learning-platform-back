import React, { useState } from 'react';
import { Box, Button, Label } from "../../index.js";
import { Modal, ModalInline } from "./index.js";
const variants = ['danger', 'primary', 'success', 'info', 'secondary', 'default', 'light'];
export const Default = {
  render: props => {
    const {
      label,
      icon,
      title,
      variant,
      subTitle
    } = props;
    const [isVisible, setIsVisible] = useState(false);
    const modalProps = {
      label,
      icon,
      title,
      variant,
      subTitle,
      onOverlayClick: () => setIsVisible(false),
      onClose: () => setIsVisible(false),
      buttons: [{
        label: 'Cancel'
      }, {
        label: 'Delete',
        variant
      }]
    };
    return /*#__PURE__*/React.createElement(Box, {
      variant: "grey"
    }, /*#__PURE__*/React.createElement(Label, null, "Inline modal: ModalInline"), /*#__PURE__*/React.createElement(Box, {
      py: "xxl",
      width: 1
    }, /*#__PURE__*/React.createElement(ModalInline, modalProps)), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Label, null, "Modal Trigger"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setIsVisible(!isVisible)
    }, "Toggle Modal"), isVisible && /*#__PURE__*/React.createElement(Modal, modalProps)));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/Modal',
  component: Modal,
  args: {
    variant: variants[0],
    title: 'Are you sure you want to delete this car?',
    subTitle: 'This item will be deleted immediately. You can’t undo this action.',
    icon: 'AlertTriangle',
    label: 'Warning'
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: 'select'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    subTitle: {
      control: {
        type: 'text'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;