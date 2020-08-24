import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import initStyle from './homeStyle'



export default function Home({ navigation }){

    const openCollection = () => {
        navigation.navigate('Collection')
    }

    const openItem = () => {
        navigation.navigate('Item')
    }

    return (
        <View style={initStyle.container}>
            <View style={initStyle.border}>

                <Text style={initStyle.text}>
                    Home
                </Text>

                <TouchableOpacity style={initStyle.containerButton}
                    onPress={openCollection}
                >
                    <Text style={initStyle.textButton}>
                        Collection
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={initStyle.containerButton}
                    onPress={openItem}
                >
                    <Text style={initStyle.textButton}>
                        Item
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}