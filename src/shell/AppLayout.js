import React, { Component } from 'react';
import AppHeader from './AppHeader';

import './AppLayout.css';

class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <AppHeader></AppHeader>
        <div className="AppLayout-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppLayout;