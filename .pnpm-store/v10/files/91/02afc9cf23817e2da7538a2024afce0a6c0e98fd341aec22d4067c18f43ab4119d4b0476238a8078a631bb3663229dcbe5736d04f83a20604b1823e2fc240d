import React from 'react';
import { connect } from 'react-redux';
import DefaultDashboard from '../app/default-dashboard.js';
import ErrorBoundary from '../app/error-boundary.js';
import allowOverride from '../../hoc/allow-override.js';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: false
    };
  }
  componentDidMount() {
    this.setState({
      isClient: true
    });
  }
  render() {
    const {
      dashboard
    } = this.props;
    const {
      isClient
    } = this.state;
    let Component;
    if (dashboard && dashboard.component && isClient && AdminJS.UserComponents[dashboard.component]) {
      Component = AdminJS.UserComponents[dashboard.component];
    } else {
      Component = DefaultDashboard;
    }
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Component, null));
  }
}
const mapStateToProps = state => ({
  dashboard: state.dashboard
});
export default allowOverride(connect(mapStateToProps)(Dashboard), 'DashboardRoute');