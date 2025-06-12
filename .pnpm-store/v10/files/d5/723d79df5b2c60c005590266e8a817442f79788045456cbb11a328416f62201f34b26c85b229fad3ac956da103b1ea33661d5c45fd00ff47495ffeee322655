/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import generateId from "./generate-id.js";

// TODO: handle iframe case with ref.current.ownerDocument
export const PortalUtils = {
  appendElement: element => {
    window.document.body.appendChild(element);
  },
  removeElement: id => {
    const domElement = window.document.getElementById(id);
    domElement?.remove();
  },
  createPortalForKey: function createPortalForKey(idKey, Component) {
    const Portal = props => {
      const [id] = useState(generateId(idKey));
      const [portalElement] = useState(window.document.createElement('div'));
      useEffect(() => {
        portalElement.id = id;
        PortalUtils.appendElement(portalElement);
        return () => {
          PortalUtils.removeElement(id);
        };
      });
      return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(Component, props), portalElement);
    };
    return Portal;
  }
};
export default PortalUtils;