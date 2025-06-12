import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/index.js";
import * as Illustrations from "../illustrations/index.js";

/**
 * @memberof Illustration
 * @alias IllustrationProps
 */

const Wrapper = styled.div.attrs(props => ({
  className: cssClass('Illustration', props.className)
}))`
  [fill='#3040D6'] {
    fill: ${({
  theme
}) => theme.colors.primary100};
  }

  [stroke='#3B3552'] {
    stroke: ${({
  theme
}) => theme.colors.accent};
  }
`;
const RawIllustration = props => {
  const {
    variant,
    ...other
  } = props;
  const IllustrationComponent = Illustrations[variant];
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(IllustrationComponent, other));
};

/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminJS.
 *
 *
 * ### Usage
 *
 * ```javascript
 * import { Illustration, IllustrationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IllustrationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-illustration--default Storybook}
 * @hideconstructor
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 * @section design-system
 */
export const Illustration = RawIllustration;
Illustration.displayName = 'Illustration';
export default Illustration;