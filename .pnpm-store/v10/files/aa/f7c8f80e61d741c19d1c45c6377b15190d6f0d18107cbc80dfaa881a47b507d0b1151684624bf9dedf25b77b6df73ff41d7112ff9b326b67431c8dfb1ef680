import { Modal } from '@adminjs/design-system';
import React from 'react';
import { useSelector } from 'react-redux';
export const AdminModal = () => {
  const modalState = useSelector(state => state.modal);
  return modalState.show ? /*#__PURE__*/React.createElement(Modal, modalState.modalProps) : null;
};
export default AdminModal;