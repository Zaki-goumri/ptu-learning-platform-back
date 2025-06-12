import { color, layout, space } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/css-class.js";

/**
 * @component
 * @private
 */
const TableCell = styled.td`
  border-top: 1px solid ${({
  theme
}) => theme.colors.border};
  border-bottom: 1px solid ${({
  theme
}) => theme.colors.border};
  font-size: ${({
  theme
}) => theme.fontSizes.default};
  line-height: ${({
  theme
}) => theme.lineHeights.default};
  word-break: break-word;
  vertical-align: middle;
  ${color}; 
  ${space};
  ${layout};

  &.options {
    text-align: right;
  }
`;
TableCell.defaultProps = {
  p: 'lg',
  color: 'text',
  className: cssClass('TableCell')
};
TableCell.displayName = 'TableCell';
export default TableCell;