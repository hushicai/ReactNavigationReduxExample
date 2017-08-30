/**
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

class ReactNavigationReduxExample extends React.Component {
  store = createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default ReactNavigationReduxExample;

