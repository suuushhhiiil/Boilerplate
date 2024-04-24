import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import DashBoard from './DashBoard';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
}
