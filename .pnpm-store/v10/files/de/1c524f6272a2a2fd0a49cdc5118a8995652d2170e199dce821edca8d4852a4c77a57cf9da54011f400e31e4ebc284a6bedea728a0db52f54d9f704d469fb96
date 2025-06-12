import { Box, Button, FormGroup, H2, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { allowOverride } from '../../hoc/allow-override.js';
import { useTranslation } from '../../hooks/index.js';
const Wrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
const StyledLogo = styled.img`
  max-width: 200px;
  margin: ${({
  theme
}) => theme.space.md} 0;
`;
const IllustrationsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & svg [stroke='#3B3552'] {
    stroke: rgba(255, 255, 255, 0.5);
  }
  & svg [fill='#3040D6'] {
    fill: rgba(255, 255, 255, 1);
  }
`;
export const Login = () => {
  const props = window.__APP_STATE__;
  const {
    action,
    errorMessage: message
  } = props;
  const {
    translateComponent,
    translateMessage
  } = useTranslation();
  const branding = useSelector(state => state.branding);
  return /*#__PURE__*/React.createElement(Wrapper, {
    flex: true,
    variant: "grey",
    className: "login__Wrapper"
  }, /*#__PURE__*/React.createElement(Box, {
    bg: "white",
    height: "440px",
    flex: true,
    boxShadow: "login",
    width: [1, 2 / 3, 'auto']
  }, /*#__PURE__*/React.createElement(Box, {
    bg: "primary100",
    color: "white",
    p: "x3",
    width: "380px",
    flexGrow: 0,
    display: ['none', 'none', 'block'],
    position: "relative"
  }, /*#__PURE__*/React.createElement(H2, {
    fontWeight: "lighter"
  }, translateComponent('Login.welcomeHeader')), /*#__PURE__*/React.createElement(Text, {
    fontWeight: "lighter",
    mt: "default"
  }, translateComponent('Login.welcomeMessage')), /*#__PURE__*/React.createElement(IllustrationsWrapper, {
    p: "xxl"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "inline",
    mr: "default"
  }, /*#__PURE__*/React.createElement(Illustration, {
    variant: "Planet",
    width: 82,
    height: 91
  })), /*#__PURE__*/React.createElement(Box, {
    display: "inline"
  }, /*#__PURE__*/React.createElement(Illustration, {
    variant: "Astronaut",
    width: 82,
    height: 91
  })), /*#__PURE__*/React.createElement(Box, {
    display: "inline",
    position: "relative",
    top: "-20px"
  }, /*#__PURE__*/React.createElement(Illustration, {
    variant: "FlagInCog",
    width: 82,
    height: 91
  })))), /*#__PURE__*/React.createElement(Box, {
    as: "form",
    action: action,
    method: "POST",
    p: "x3",
    flexGrow: 1,
    width: ['100%', '100%', '480px']
  }, /*#__PURE__*/React.createElement(H5, {
    marginBottom: "xxl"
  }, branding.logo ? /*#__PURE__*/React.createElement(StyledLogo, {
    src: branding.logo,
    alt: branding.companyName
  }) : branding.companyName), message && /*#__PURE__*/React.createElement(MessageBox, {
    my: "lg",
    message: message.split(' ').length > 1 ? message : translateMessage(message),
    variant: "danger"
  }), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, translateComponent('Login.properties.email')), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    placeholder: translateComponent('Login.properties.email')
  })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, translateComponent('Login.properties.password')), /*#__PURE__*/React.createElement(Input, {
    type: "password",
    name: "password",
    placeholder: translateComponent('Login.properties.password'),
    autoComplete: "new-password"
  })), /*#__PURE__*/React.createElement(Text, {
    mt: "xl",
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained"
  }, translateComponent('Login.loginButton'))))), branding.withMadeWithLove ? /*#__PURE__*/React.createElement(Box, {
    mt: "xxl"
  }, /*#__PURE__*/React.createElement(MadeWithLove, null)) : null);
};
export default allowOverride(Login, 'Login');