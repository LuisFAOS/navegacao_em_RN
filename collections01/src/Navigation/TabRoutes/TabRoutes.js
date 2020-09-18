import React from 'react';

import Profile from '../../views/Profile/Profile'
import Home from '../../views/Home/Home'

import DrawerRoutes from '../DrawerRoutes/DrawerRoutes'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {      
    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    labelStyle: { fontSize: 24 },
                    style: { backgroundColor:'#14417b' },
                    activeTintColor: '#FFFFFF'
                }
            }
        >
            <Tab.Screen name="Home" component={DrawerRoutes}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
  );
}