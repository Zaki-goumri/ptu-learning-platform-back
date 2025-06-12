import React from 'react';
import { IllustrationVariant } from '../../atoms/illustration/index.js';
import { BoxProps } from '../../atoms/box/index.js';
/**
 * @memberof InfoBox
 * @alias InfoBoxProps
 */
export type InfoBoxProps = {
    /** Title of an InfoBox */
    title?: string;
    /** Inner content - usually couple of {@link Text} nodes */
    children: React.ReactNode;
    /** Infobox illustration {@link Illustration} or custom element above title */
    illustration?: IllustrationVariant | React.ReactElement;
    /** Optional testId */
    testId?: string;
    variant?: BoxProps['variant'];
};
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
declare const InfoBox: React.FC<InfoBoxProps>;
export { InfoBox };
export default InfoBox;
