import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import loginReducer from './app/redux/reducers/loginReducer';
import NeoScrumApp from './app/neoScrumApp';

const store = createStore(loginReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <NeoScrumApp />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
