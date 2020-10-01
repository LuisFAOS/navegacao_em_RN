import React from 'react';
import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import DrawerStyle from './DrawerStyle'

export default function MyDrawer(props){
    return (  
        <DrawerContentScrollView {...props}>
            <View style={DrawerStyle.photoContainer}>
                <Image 
                    style={DrawerStyle.photo}
                    source={require('../../../assets/itemsImgs/1.jpg')}
                />
                <Text style={DrawerStyle.name}>Administrador</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}