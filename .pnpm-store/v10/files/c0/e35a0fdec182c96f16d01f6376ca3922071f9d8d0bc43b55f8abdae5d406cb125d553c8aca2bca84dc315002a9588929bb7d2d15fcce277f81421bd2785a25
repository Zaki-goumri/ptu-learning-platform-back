import { space } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
  font-size: ${({
  theme
}) => theme.space.lg};
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    background-image: url('${({
  src
}) => src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  background-color: ${({
  theme
}) => theme.colors.primary100};
  color: ${({
  theme
}) => theme.colors.white};

  ${space}
`;
Avatar.displayName = 'Avatar';
export default Avatar;