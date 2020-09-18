import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer, TabActions } from '@react-navigation/native'
import LoginStackRoutes from './src/Navigation/StackRoutes/LoginStackRoutes';


export default function App(){
    return (
        <NavigationContainer>
            <LoginStackRoutes/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreen: {
    backgroundColor: '#000000'
  },
  homeScreen: {
      backgroundColor: '#92afd7'
  },
  collectionScreen: {
      backgroundColor: '#d0f4ea'
  },
  itemScreen: {
      backgroundColor: '#d1d1d1'
  } 
});
