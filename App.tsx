import React from 'react';
import { registerRootComponent } from 'expo';
import Home from './src/screens/Home/Home';

const App = () => {
  return <Home />;
};

export default registerRootComponent(App);

