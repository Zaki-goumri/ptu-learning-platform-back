import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { Illustration } from "../../atoms/illustration/index.js";
import { Box } from "../../atoms/box/index.js";
import { H4 } from "../../atoms/typography/index.js";
import { cssClass } from "../../utils/css-class.js";
const StyledInfoBox = styled(Box)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

/**
 * @memberof InfoBox
 * @alias InfoBoxProps
 */

/**
 * @classdesc
 *
 * <img src="components/info-box.png" />
 *
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * ### Usage
 *
 * ```javascript
 * import { InfoBox, InfoBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-infobox--default Storybook}
 * @see InfoBoxProps
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Plus" />Create</Button>
 * </InfoBox>
 * )
 * @section design-system
 */
const InfoBox = ({
  children,
  title,
  illustration,
  variant = 'transparent',
  testId
}) => /*#__PURE__*/React.createElement(StyledInfoBox, {
  "data-testid": testId,
  variant: variant,
  className: cssClass('InfoBox')
}, illustration && typeof illustration === 'string' ? /*#__PURE__*/React.createElement(Illustration, {
  variant: illustration
}) : illustration, title && /*#__PURE__*/React.createElement(H4, {
  mb: "lg"
}, title), children);
InfoBox.displayName = 'InfoBox';
export { InfoBox };
export default InfoBox;