import React from 'react'

import Home from '../../views/Home/Home'
import Collection from '../../views/Collection/Collection'
import Item from '../../views/Item/Item'
import Profile from '../../views/Profile/Profile'
import MyDrawer from './MyDrawer'
import { MaterialIcons } from '@expo/vector-icons'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator
            drawerContent={MyDrawer}
        >

            <Drawer.Screen 
                name="Home" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="home" size={size} color={color}/>
                    )
                }}    
            />
            <Drawer.Screen 
                name="Collection" 
                component={Collection}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="storage" size={size} color={color}/>
                    )
                }}  
            />
            <Drawer.Screen 
                name="Item" 
                component={Item}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="done-all" size={size} color={color}/>
                    )
                }}  
            />
            <Drawer.Screen  
                name="Profile" 
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="person" size={size} color={color}/>
                    )
                }}  
            />
        </Drawer.Navigator>
    );
}
