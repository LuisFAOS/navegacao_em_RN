import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import collectionStyles from '../../globalStyle/pagesStyles'

export default function Collection({ navigation }){
    return (
        <View style={collectionStyles.container}>
            <View style={collectionStyles.border}>

                <Text style={collectionStyles.text}>
                    Coleção
                </Text>

                <TouchableOpacity style={collectionStyles.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={collectionStyles.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}