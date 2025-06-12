import { rgba } from 'polished';
import { styled } from "../../../build/utils/styled.js";
import { space, variant } from 'styled-system';
import { Box } from "../../atoms/box/index.js";
import { cssClass } from "../../utils/index.js";
import DropDownMenu from "./drop-down-menu.js";
const variantsShared = (theme, color) => ({
  color,
  [`& .${cssClass('DropDownItemAction')}`]: {
    color
  },
  '&:hover': {
    bg: rgba(theme.colors[color], 0.03)
  }
});
const colorVariants = variant({
  prop: 'colorVariant',
  variants: {
    primary: theme => variantsShared(theme, 'primary100'),
    danger: theme => variantsShared(theme, 'error'),
    success: theme => variantsShared(theme, 'success'),
    info: theme => variantsShared(theme, 'info'),
    secondary: theme => variantsShared(theme, 'accent'),
    light: theme => variantsShared(theme, 'grey80'),
    default: theme => variantsShared(theme, 'text')
  }
});

/**
 * Props passed to DropDownItem
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 * @extends BoxProps
 */

/**
 * @component
 * @private
 */
export const DropDownItem = styled(Box)`
  color: ${({
  theme
}) => theme.colors.text};
  font-family: ${({
  theme
}) => theme.font};
  ${({
  onClick
}) => onClick ? 'cursor: pointer;' : ''};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  text-align: left;

  &:hover {
    background: ${({
  theme
}) => rgba(theme.colors.text, 0.03)};
  }

  & .${cssClass('Icon')} {
    padding-right: ${({
  theme
}) => theme.space.default};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${DropDownMenu} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${DropDownMenu} {
    display: flex;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }

  padding: ${({
  theme
}) => `${theme.space.lg} ${theme.space.xxl}`};

  ${space};
  ${colorVariants};
`;
DropDownItem.displayName = 'DropDownItem';
export default DropDownItem;