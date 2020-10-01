import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity} from 'react-native'
import homeStyles from '../../globalStyle/pagesStyles'
import { useIsDrawerOpen } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'

export default function Home({ navigation }){

    const isDrawerOpen = useIsDrawerOpen()

    const ShowDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const openCollection = () => {
        navigation.navigate('Collection')
    }

    const openItem = () => {
        navigation.navigate('Item')
    }

    return (
        <>
            <View style={homeStyles.header}>
                <TouchableOpacity onPress={ShowDrawer}>
                    <AntDesign name="menu-fold" size={18} color="white"/>
                </TouchableOpacity>
            </View>
            <ImageBackground source={require('../../../assets/imgs/blackBackground.jpg')} style={homeStyles.container}>
                <View style={homeStyles.border}>

                    <Text style={homeStyles.text}>
                        Home
                    </Text>

                    <TouchableOpacity style={homeStyles.containerButton}
                        onPress={openCollection}
                    >
                        <Text style={homeStyles.textButton}>
                            Collection
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.containerButton}
                        onPress={openItem}
                    >
                        <Text style={homeStyles.textButton}>
                            Item
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </>
    )
}