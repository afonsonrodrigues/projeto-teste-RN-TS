import React from 'react';
import {View} from 'react-native';
import Botao from './src/components/botao';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Botao titulo="Botao 1" />
      <Botao titulo="Botao 2" />
    </View>
  );
};

export default App;
