import React from 'react';
import {Image} from 'react-native';

const App = () => {
  return <Image source={require('./image.png')} resizeMode="contain" />;
};

export default App;
