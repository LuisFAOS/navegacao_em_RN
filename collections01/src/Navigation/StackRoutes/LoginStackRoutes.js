import React from 'react';

import Home from '../../views/Home/Home'
import Login from '../../views/Login/Login'

import styles from './StyleStackRoutes'

import TabRoutes from '../TabRoutes/TabRoutes'

import { createStackNavigator } from '@react-navigation/stack'

const STACK = createStackNavigator();

const LoginStackRoutes = () =>{
    return(
        <STACK.Navigator>
            <STACK.Screen 
                name='Login' 
                component={Login} 
                options={
                    { cardStyle: styles.loginScreen,
                        headerShown: false,
                    }
                }
                />
            
            <STACK.Screen 
                name='Home'
                component={TabRoutes} 
                options={
                    { cardStyle: styles.homeScreen,
                        headerShown: false
                    }
                }
                />
    
        </STACK.Navigator>
    )
}

export default LoginStackRoutes