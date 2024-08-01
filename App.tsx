/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [text, setText] = useState("")

  return (
    <View style={{flex:1 , backgroundColor:"#fff", }}>
      <TextInput placeholder="BUG PLACEHOLDER TESTE" style={{color:"#000", fontFamily:"Roboto-Black"}} placeholderTextColor={"#000"} onChangeText={setText} value={text} />
    </View>
  );
}

export default App;
