import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './src/views/Home/Home'
import Collection from './src/views/Collection/Collection'
import Item from './src/views/Item/Item'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const STACK = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <STACK.Navigator>
            <STACK.Screen 
                name='Home' 
                component={Home} 
                options={
                    { cardStyle: styles.homeScreen,
                      headerStyle: {backgroundColor: '#14417b'},
                      headerTintColor: '#FFFFFF'
                    }
                }
            />
            
            <STACK.Screen 
                name='Collection'
                component={Collection} 
                options={
                    { cardStyle: styles.collectionScreen,
                      headerStyle: {backgroundColor: '#14417b'},
                      headerTintColor: '#FFFFFF'
                    }
                }
            />
            
            <STACK.Screen
                name='Item'
                component={Item} 
                options={
                    { cardStyle: styles.itemScreen,
                      headerStyle: {backgroundColor: '#14417b'},
                      headerTintColor: '#FFFFFF'
                    }
                }
            />
        </STACK.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
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
