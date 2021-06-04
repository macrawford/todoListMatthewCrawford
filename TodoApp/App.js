import React from 'react';
import HomeScreen from './src/screens/HomeScreen.js';
import {Provider} from 'react-redux';
import {store} from './src/store/index.js';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  )
};

export default App;