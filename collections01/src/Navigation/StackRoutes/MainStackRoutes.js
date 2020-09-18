import React from 'react';

import Home from '../../views/Home/Home'
import Collection from '../../views/Collection/Collection'
import Item from '../../views/Item/Item'

import styles from './StyleStackRoutes'

import { createStackNavigator } from '@react-navigation/stack'

const STACK = createStackNavigator();

const MainStackRoutes = () => {
    return (
        <STACK.Navigator>
            <STACK.Screen 
                name='Home' 
                component={Home} 
                options={
                    { cardStyle: styles.homeScreen,
                      headerShown: false,
                    }
                }
            />
            
            <STACK.Screen 
                name='Collection'
                component={Collection} 
                options={
                    { cardStyle: styles.collectionScreen,
                      headerShown: false
                    }
                }
            />
            
            <STACK.Screen
                name='Item'
                component={Item} 
                options={
                    { cardStyle: styles.itemScreen,
                      headerShown: false
                    }
                }
            />
        </STACK.Navigator>
    )
}

export default MainStackRoutes