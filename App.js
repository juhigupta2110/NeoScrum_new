import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

//import store from './app/redux/store';
import loginReducer from './app/redux/reducers/loginReducer';
import NeoScrumApp from './app/neoScrumApp';
import NeoScrumStackNav from './app/neoScrumStackNav';
import NeoScrumTabNav from './app/neoScrumTabNav';
import NeoScrumDrawerNav from './app/neoScrumDrawerNav';
import NeoScrumAppNew from './app/neoScrumAppNew';

//const sagaMiddleware = createSagaMiddleware();

const store = createStore(loginReducer);

//sagaMiddleware.run(rootSaga);

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
