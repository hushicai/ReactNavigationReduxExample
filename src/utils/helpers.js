/**
 * Created by hushicai on 17/9/7.
 */

import React from 'react';

export const enhanceScreen = (Screen) => {
  class EnhancedScreen extends React.Component {
    render() {
      return <Screen
        {...this.props.navigation.state.params}
        {...this.props}
      />;
    }
  }

  return EnhancedScreen;
};