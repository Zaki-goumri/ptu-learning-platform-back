import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Drawer, DEFAULT_DRAWER_WIDTH } from '@adminjs/design-system';
// @ts-ignore Note: Ignore while @adminjs/design-system/styled-components doesn't export types
import { ThemeProvider } from '@adminjs/design-system/styled-components';
import { setDrawerPreRoute } from '../../store/actions/set-drawer-preroute.js';

/**
 * @alias DrawerPortalProps
 * @memberof DrawerPortal
 */

const DRAWER_PORTAL_ID = 'drawerPortal';
const DRAWER_PORTAL_WRAPPER_ID = 'drawerPortalWrapper';
const DrawerWrapper = ({
  onMount,
  onUnmount
}) => {
  useEffect(() => {
    onMount();
    return onUnmount;
  }, []);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: window.THEME
  }, /*#__PURE__*/React.createElement(Drawer, {
    id: DRAWER_PORTAL_ID,
    className: "hidden",
    "data-css": "drawer"
  }));
};
const getOrCreatePortalContainer = id => {
  let container = document.getElementById(id);
  if (!container) {
    container = window.document.createElement('div');
    container.id = id;
    window.document.body.appendChild(container);
  }
  return container;
};

/**
 * Shows all of its children in a Drawer on the right.
 * Instead of rendering it's own {@link Drawer} component it reuses
 * the global Drawer via React Portal.
 *
 * ### Usage
 *
 * ```
 * import { DrawerPortal } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 */
export const DrawerPortal = ({
  children,
  width
}) => {
  const [drawerElement, setDrawerElement] = useState(document.getElementById(DRAWER_PORTAL_ID));
  const {
    from = null
  } = useSelector(state => state.router);
  const dispatch = useDispatch();
  const handleDrawerMount = () => {
    dispatch(setDrawerPreRoute({
      previousRoute: from
    }));
    setDrawerElement(document.getElementById(DRAWER_PORTAL_ID));
  };
  const handleDrawerUnmount = () => {
    dispatch(setDrawerPreRoute({
      previousRoute: null
    }));
  };
  useEffect(() => {
    const innerWrapperElement = getOrCreatePortalContainer(DRAWER_PORTAL_WRAPPER_ID);
    if (!drawerElement && window) {
      const drawerRoot = createRoot(innerWrapperElement);
      drawerRoot.render( /*#__PURE__*/React.createElement(DrawerWrapper, {
        onMount: handleDrawerMount,
        onUnmount: handleDrawerUnmount
      }));
    }
    return () => {
      const innerWrapper = document.getElementById(DRAWER_PORTAL_WRAPPER_ID);
      if (innerWrapper) document.body.removeChild(innerWrapper);
    };
  }, []);
  useEffect(() => {
    if (drawerElement) {
      drawerElement.classList.remove('hidden');
      if (width) {
        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
      }
      return () => {
        drawerElement.style.width = DEFAULT_DRAWER_WIDTH;
        drawerElement.classList.add('hidden');
        drawerElement.setAttribute('data-css', 'drawer-element');
      };
    }
    return () => undefined;
  }, [drawerElement]);
  if (!drawerElement) {
    return null;
  }
  return /*#__PURE__*/createPortal(children, drawerElement);
};
export default DrawerPortal;