import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import homeStyles from '../../globalStyle/pagesStyles'



export default function Home({ navigation }){

    const openCollection = () => {
        navigation.navigate('Collection')
    }

    const openItem = () => {
        navigation.navigate('Item')
    }

    return (
        <View style={homeStyles.container}>
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
        </View>
    )
}