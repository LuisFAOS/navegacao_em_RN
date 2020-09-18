import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import itemStyles from '../../globalStyle/pagesStyles'


export default function Item({ navigation }){
    return (
        <View style={itemStyles.container}>
            <View style={itemStyles.border}>

                <Text style={itemStyles.text}>
                    Item
                </Text>

                <TouchableOpacity style={itemStyles.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={itemStyles.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}