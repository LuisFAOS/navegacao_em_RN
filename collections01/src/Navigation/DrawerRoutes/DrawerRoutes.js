import React from 'react'

import Home from '../../views/Home/Home'
import Collection from '../../views/Collection/Collection'
import Item from '../../views/Item/Item'
import Profile from '../../views/Profile/Profile'

import StackRoutes from '../StackRoutes/MainStackRoutes'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackRoutes}/>
            <Drawer.Screen name="Collection" component={Collection}/>
            <Drawer.Screen name="Item" component={Item}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
}
