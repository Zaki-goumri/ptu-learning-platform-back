import React, { useEffect, useState } from 'react';

/**
 * A higher-order component that prevents a component from rendering server-side
 *
 * @template P - The props object of the wrapped component
 * @param {React.ComponentType<P>} Component - The component to be wrapped
 * @returns {React.FC<P>} A new component that renders the given component client-side only
 */
// eslint-disable-next-line max-len
const withNoSSR = Component => props => {
  const [isClient, setIsClient] = useState(false);

  /**
   * Sets isClient to true when the component is mounted on the client side
   */
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Renders nothing if the component is not mounted on the client side
  if (!isClient) return null;

  // Renders the wrapped component with the given props if it's mounted on the client side
  return /*#__PURE__*/React.createElement(Component, props);
};
export { withNoSSR as default, withNoSSR };