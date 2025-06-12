import React from 'react';
import { Text, MessageBox } from '@adminjs/design-system';
import { useTranslation } from '../../hooks/index.js';
const ErrorMessage = ({
  error
}) => {
  const {
    translateMessage
  } = useTranslation();
  return /*#__PURE__*/React.createElement(MessageBox, {
    m: "xxl",
    variant: "danger",
    message: "Javascript Error"
  }, /*#__PURE__*/React.createElement(Text, null, error.toString()), /*#__PURE__*/React.createElement(Text, {
    mt: "default"
  }, translateMessage('seeConsoleForMore')));
};
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  componentDidCatch(error) {
    this.setState({
      error
    });
  }
  render() {
    const {
      children
    } = this.props;
    const {
      error
    } = this.state;
    if (error !== null) {
      return /*#__PURE__*/React.createElement(ErrorMessage, {
        error: error
      });
    }
    return children || null;
  }
}
export default ErrorBoundary;