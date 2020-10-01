import React from 'react';

import Profile from '../../views/Profile/Profile'
import Home from '../../views/Home/Home'

import DrawerRoutes from '../DrawerRoutes/DrawerRoutes'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Collection from '../../views/Collection/Collection';
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const icones = {
    Home: {name: 'home'},
    Collections: {name: 'storage'},
    Profile: {name: 'person'},
}

export default function TabRoutes() {      
    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    style: { backgroundColor:'#14417b' },
                    activeTintColor: '#FFFFFF',
                    showLabel: false,
                }
            }
            screenOptions = {({ route }) => ({
                tabBarIcon: ({color, size}) => {
                    const { name } = icones[route.name]
                    return <MaterialIcons name={name} size={size} color={color}/>
                }
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={DrawerRoutes}
                options={{
                    unmountOnBlur: true,
                }}
                />
            <Tab.Screen 
                name="Collections"
                component={Collection}
                />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                />
        </Tab.Navigator>
  );
}